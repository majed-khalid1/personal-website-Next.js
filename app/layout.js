import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Majed Khaled | Front-End Developer",
  description:
    "Software engineering student and front-end developer in Jeddah.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-white text-ink`}
      >
        <Header />
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
