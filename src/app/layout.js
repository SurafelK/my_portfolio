// app/layout.js or app/_app.js
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Add the weights you need
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className} style={{ backgroundColor: '#051622' }} >
        <main className="w-full mx-auto p-4"  >
          {children}
        </main>
      </body>
    </html>
  );
}
