import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Providers from "@/lib/providers";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ComunikimeChallenge",
  description: "Compra e venda de produtos",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <Providers>
          <Home session={session} />
        </Providers>
      </body>
    </html>
  );
}
