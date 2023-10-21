import type { Metadata } from "next";
import SvgSprite from "./components/svg-sprite";
import "@styles/global.scss";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fa" dir="rtl" prefix="og: https://ogp.me/ns#">
      <body>
        {children}
        <SvgSprite />
      </body>
    </html>
  );
}
