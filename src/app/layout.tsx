import type { Metadata } from "next";
import "./globals.css";
import Home from "../../pages/Home/Home";
import Skills from "../../pages/Skills/Skills";

export const metadata: Metadata = {
  title: "Portfolio_Nishant",
  description: "Created by Nishant Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body >
        <main className="min-h-screen ">
         <Home/>
        <Skills/> 
        </main>
      </body>
    </html>
  );
}
