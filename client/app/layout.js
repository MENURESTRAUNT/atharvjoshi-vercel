import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Gaylord's Express | Authentic Vegetarian Cuisine in Dehradun",
  description: "Experience the finest vegetarian dining at Gaylord's Express, Dehradun. Cafe-style ambiance, premium service, and authentic flavors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${jakarta.variable} antialiased bg-neutral-950 text-neutral-100`}>
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
