import "./globals.css";
import { Inter } from "next/font/google";
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

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
          <Home />
      </body>
    </html>
  );
}
