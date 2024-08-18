import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrains_Mono = JetBrains_Mono(
{ subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrains_Mono'
});

export const metadata = {
  title: "Ranjith's Portfolio",
  description: "A sleek and sophisticated showcase of Ranjith's work, blending modern design with a minimalist aesthetic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrains_Mono.variable}>
      <Header />
      <StairTransition />
      <PageTransition>
        {children}
      </PageTransition>
      </body>
    </html>
  );
}
