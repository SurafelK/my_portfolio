// app/layout.js or app/_app.js
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Add the weights you need
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <title>Surafel - Full Stack Developer</title>
          <meta name="description" content="Full Stack Developer skilled in building dynamic web applications. Check out my projects, skills, and passion for technology!" />                
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <body className={roboto.className} style={{ backgroundColor: '#051622' }} >
        <main className="w-full mx-auto p-4"  >
          {children}
        </main>
      </body>
    </html>
  );
}
