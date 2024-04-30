import type { Metadata } from "next";
import "./globals.css";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Àsùnkẹ́💝",
  description: "Happy birthday ìfẹtémi💝",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
