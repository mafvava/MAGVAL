import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";



const inter = Inter({

  subsets: ["latin"],

});



export const metadata: Metadata = {

  title: "MagVal | Diseño Web Profesional",

  description:
    "Creamos páginas web modernas y soluciones digitales para negocios y empresas.",

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="es">

      <body
        className={inter.className}
      >

        {children}

      </body>

    </html>

  );

}