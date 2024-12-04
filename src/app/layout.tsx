import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "swiper/css/bundle";

export const metadata: Metadata = {
  title: "Luiz Rodrigues",
  description: "Desenvolvedor FrontEnd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body className="flex flex-col justify-between items-center">
        <Header />
        {/* <NextTopLoader
          color="#eeeeee"
          showSpinner={false}
          speed={1000}
          shadow={false}
        /> */}
        <main className="min-h-screen flex flex-col justify-center items-center w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
