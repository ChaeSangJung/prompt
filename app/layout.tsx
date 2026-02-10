import type { Metadata } from "next";
import LayoutComp from "../components/LayoutComp";

export const metadata: Metadata = {
  title: "prompt generator",
  description: "prompt generator for AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutComp>{children}</LayoutComp>;
}
