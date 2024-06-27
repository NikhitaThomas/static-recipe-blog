import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Baker",
  description: "Recipe Blog",
};

export default function RootLayout({ children }) {
  let header = (
    <header>
      <h1>
        <Link href={"/"}>
          <h1 className="text-6xl text-center p-12">The baker</h1>
        </Link>
      </h1>
    </header>
  );

  let footer = (
    <footer className="text-center">
      <p>Made with 💜</p>
    </footer>
  );
  return (
    <html
      lang="en"
      className="bg-gradient-to-r from-violet-500 to-fuchsia-500 "
    >
      <body className={inter.className}>
        <div className="text-white">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
