import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const noto = Noto_Sans({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Orus Ilyas Lab",
  description: "Observing Wildlife, Understanding Roles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
