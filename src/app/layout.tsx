import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VIRTUE Dental Clinic – Your Smile, Our Priority!",
  description: "Comprehensive dental care in Pala, Kottayam led by Dr. Abhijit Sajo Sebastian BDS MDS. General, cosmetic, orthodontic & emergency dentistry.",
  keywords: "Dental Clinic Pala, Dentist Kottayam, Dr. Abhijit Sajo Sebastian, Root Canal Treatment Kerala, Dental Implants Kottayam, Endodontics Pala",
  metadataBase: new URL("https://nfc.dgtechsoln.com/virtue-dental-clinic/"),
  alternates: {
    canonical: "https://nfc.dgtechsoln.com/virtue-dental-clinic/",
  },
  openGraph: {
    title: "VIRTUE Dental Clinic – Your Smile, Our Priority!",
    description: "Expert dental care in Pala, Kottayam. Led by Dr. Abhijit Sajo Sebastian BDS MDS.",
    url: "https://nfc.dgtechsoln.com/virtue-dental-clinic/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/10 selection:text-primary">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
