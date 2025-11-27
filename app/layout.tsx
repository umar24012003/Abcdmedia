import type { ReactNode } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
       <Footer />
      </body>
    </html>
  );
}
