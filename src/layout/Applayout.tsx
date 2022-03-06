import Head from "next/head";
// import Script from "next/script";
import { PropsWithChildren } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LayoutWrapper from "@/layout/LayoutWrapper";


interface Applayout {
  title: string;
}


export default function Applayout({ children, title }: PropsWithChildren<Applayout>) {
  return (
    <LayoutWrapper>
     
      <Head>
        <title>{title} | Sailfish e-commerce online store </title>
      </Head>
      <Header />
      <main className="w-full items-center flex flex-col">
        {children}
        <Footer />
      </main>
    </LayoutWrapper>
  );
}
