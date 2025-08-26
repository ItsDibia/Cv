import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Curriculum Vitae",
  description: "Curriculum Vitae de Diego Perez",
  keywords: ["Curriculum Vitae", "Diego Perez", "Portafolio", "Desarrollador", "React", "Next.js", "Node.js", "MongoDB", "MySQL", "Python", "Power BI", "Excel"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-200`}
      >
        {children}
      </body>
    </html>
  );
}
