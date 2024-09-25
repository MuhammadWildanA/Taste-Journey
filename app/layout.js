import {Jost} from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";

const jost = Jost({subsets: ['latin']});

export const metadata = {
  title: "Taste Journey",
  description: "Taste Journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
      <Header></Header>
        {children}
      </body>
    </html>
  );
}
