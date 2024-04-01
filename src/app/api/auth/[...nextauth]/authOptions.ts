import GitHubProvider from "next-auth/providers/github";
import { signInSchema } from "./schema";
import { NextAuthOptions } from "next-auth";
import { prismaConnection } from "@/server/infra/db/prisma";

export interface IUser {
  email?: string | null;
  name?: string | null;
  image?: string | null;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: String(process.env.GITHUB_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
  ],
  callbacks: {

    async signIn({ user }: {user: any}) {
      const { id, email, image, name } = signInSchema.parse(user);

      const dbUser = await prismaConnection.user.findUnique({
        where: { email },
      });

      if (!dbUser) {
        await prismaConnection.user.create({
          data: {
            email: email,
            avatarUrl: image || "",
            name: name || "",
            id: Number(id),
          },
        });
      }

      return true;
    },

    async session({ session }: {session: any}) {
      if (session.user) {
        const dbUser = await prismaConnection.user.findUnique({
          where: { email: session.user.email || "" },
        });

        if (dbUser) {
          session.user.id = dbUser.id;
        }
      }

      return session;
    },
  },
};
