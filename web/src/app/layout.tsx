import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plataforma Educativa",
  description: "Material educativo para formación docente",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
