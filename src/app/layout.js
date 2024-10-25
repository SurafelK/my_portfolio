import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Add the weights you need
});

export const metadata = {
  title: "Surafel - Full Stack Developer",
  description: "Full Stack Developer skilled in building dynamic web applications. Check out my projects, skills, and passion for technology!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Surafel - Full Stack Developer</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={roboto.className} style={{ backgroundColor: '#051622' }}>
        <main className="w-full mx-auto p-4">
          {children}
        </main>
        <footer className="text-center p-4">
          <p>
            Created by <a href="https://surafelkportfolio.vercel.app/" className="text-blue-500">Surafel</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
