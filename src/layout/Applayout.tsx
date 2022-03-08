import dynamic from "next/dynamic";
import Head from "next/head";
import { PropsWithChildren } from "react";
import LayoutWrapper from "@/layout/LayoutWrapper";

const TrustmateWidget = dynamic(
  () => import("@/components/Widget/TrustmateWidget")
);

const Header = dynamic(() => import("@/components/Header"));
const Footer = dynamic(() => import("@/components/Footer"));

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
