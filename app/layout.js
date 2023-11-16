import { Golos_Text, Sofia_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";

const golos = Golos_Text({
  subsets: ["latin"],
  variable: "--font-golos",
  display: "swap",
});
const sofia = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia",
  display: "swap",
});

export const metadata = {
  title: "Vladislav Pavlov",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${golos.variable} ${sofia.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
