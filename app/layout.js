import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Dashboard from "./dashboard/page";
import Navbar from "./Navbar/page";
import { Inter } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: "urltosmallurl",
  description: "A URL shortener",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-950 text-gray-300">
          {/* Navbar */}
       <Navbar />

          {/* Page Content */}
          <main className={inter.className}>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}