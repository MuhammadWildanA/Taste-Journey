import { Jost } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer"
import "./globals.css";
import ClientComponent from './_components/ClientComponent'; // Import ClientComponent

const jost = Jost({ subsets: ['latin'] });

export const metadata = {
  title: "Taste Journey",
  description: "Taste Journey",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={jost.className}>
        <ClientComponent></ClientComponent>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
