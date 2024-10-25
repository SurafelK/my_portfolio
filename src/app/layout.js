import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Add the weights you need
});

export const metadata = {
  title: "Surafel - Full Stack Developer",
  description: "Full Stack Developer skilled in building dynamic web applications. Check out my projects, skills, and passion for technology!",
  image: "/path/to/your/image.jpg", // Replace with the actual image path for social sharing
  url: "https://surafelkportfolio.vercel.app/", // Ensure this is the correct URL
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={roboto.className} style={{ backgroundColor: '#051622' }}>
        <main className="w-full mx-auto p-4">
          {children}
        </main>
    
      </body>
    </html>
  );
}
