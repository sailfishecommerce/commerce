import dynamic from "next/dynamic";
import Head from "next/head";
import { PropsWithChildren } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LayoutWrapper from "@/layout/LayoutWrapper";

const TrustmateWidget = dynamic(
  () => import("@/components/Widget/TrustmateWidget")
);

interface Applayout {
  title: string;
}

export default function Applayout({
  children,
  title,
}: PropsWithChildren<Applayout>) {
  return (
    <LayoutWrapper>
      <TrustmateWidget>
        <Head>
          <title>{title} | Sailfish e-commerce online store </title>
        </Head>
        <Header />
        <main className="w-full items-center flex flex-col">
          {children}
          <Footer />
        </main>
      </TrustmateWidget>
    </LayoutWrapper>
  );
}
