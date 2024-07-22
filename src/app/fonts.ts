import { Inter, Roboto_Slab, Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const fonts = {
  rubik,
  robotoSlab,
  inter,
};
