import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/providers/Provider";
import { fonts } from "./fonts";

import 'primeicons/primeicons.css';
        

export const metadata: Metadata = {
  title: "KitX Docs - Next js ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.rubik.variable + ` bg-white dark:bg-neutral-950`}>
        <Provider >
          {children}
        </Provider>
      </body>
    </html>
  );
}
