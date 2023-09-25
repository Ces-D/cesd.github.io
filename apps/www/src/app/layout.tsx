import type { Metadata } from "next";

import "@/styles/fonts.css";
import "@/styles/palette.css";
import "@/styles/spacing.css";
import "@/styles/resets.css";

import MastHead from "@/components/MastHead";

export const metadata: Metadata = {
  title: "Cesar Diaz",
  description:
    "Dive into my tech repository. Here you'll find my technological projects, coding milestones, and opinions into the tech-scape. Eager to shape the digital today?",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MastHead />
        {children}
      </body>
    </html>
  );
}
