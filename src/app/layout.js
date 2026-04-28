import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontOutfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "PixGen",
  description: "a mordern place to generate image",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fontOutfit.className} h-full antialiased`}
    >
      <body >
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
