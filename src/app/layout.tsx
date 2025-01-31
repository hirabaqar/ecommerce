import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components1/Navbar1";
import Footer from "@/Components1/Footer1";
// import Hero1  from "@/Components1/Hero1";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanity Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
     <Navbar/>
     {/* <Hero1/> */}
        {children}
        <Footer/>
        </body>
    </html>
  );
}
