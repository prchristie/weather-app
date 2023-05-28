import "./globals.css";
import { Inter } from "next/font/google";
import bg from "../../public/background.webp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Weather App",
  description: "Bad weather by bad developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
