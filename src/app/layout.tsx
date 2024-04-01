

import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/contexts/AuthContext";
import Providers from "./providers";
import { ToastContainer } from "react-toastify";

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

  return (
    <html lang="en">
      <AuthProvider>
        <body suppressHydrationWarning={true}>
          <Providers>
            {children}
            <ToastContainer/>
          </Providers>
        </body>
      </AuthProvider>
    </html>
  );
}
