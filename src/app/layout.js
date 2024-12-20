import localFont from "next/font/local";
import "./globals.css";
import { Navbar, Footer } from "@/components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full min-h-screen">
          <Navbar />
          <main className="h-[85vh]">
            <div className="max-h-[85vh] overflow-auto px-20">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
