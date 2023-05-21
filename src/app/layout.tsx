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
    <html
      lang="en"
      style={{
        background: `url(${bg.src})`,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0,0,0,0.1)",
      }}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
