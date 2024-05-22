import { Jost } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "../layout";

const inter = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "DEVXUB ",
  description: "Developer XUB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="max-w-7xl mx-auto max-h-screen min-h-screen">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
