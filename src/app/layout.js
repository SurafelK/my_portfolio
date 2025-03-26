import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Surafel Kassahun - Full Stack Developer",
  description: "Full Stack Developer skilled in building dynamic web applications. Check out my projects, skills, and passion for technology!",
  metadataBase: new URL("https://surafelkportfolio.vercel.app"),
  openGraph: {
    title: "Surafel Kassahun - Full Stack Developer",
    description: "Professional portfolio showcasing my web development projects and skills",
    url: "https://surafelkportfolio.vercel.app",
    siteName: "Surafel's Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surafel Kassahun Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surafel Kassahun - Full Stack Developer",
    description: "Professional portfolio showcasing my web development projects and skills",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth"><head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </head>
    <body className={`${roboto.className} bg-[#051622] text-white`}>
      <main className="min-h-screen w-full mx-auto">
        {children}
      </main>
    </body></html>
  );
}