import { Caveat, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const caveat = Caveat({
  weight: ["400", "700"],
  subsets: ["cyrillic"],
  variable: "--font-caveat",
  display: "swap",
});
