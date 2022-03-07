import dynamic from "next/dynamic";

import Applayout from "@/layout/Applayout";

const ShopView = dynamic(() => import("@/components/View/ShopView"));

export default function Shop() {
  return (
    <Applayout title="Shop for quality imported products from Australia. Choose from over 10,000 genuine health, personal care, confectionery, beauty and baby care products. Get vitamins, health and food supplements, cosmetics, confectionery, quit smoking aids, hair colours, baby food and much more. Owned & operated by HK'ers">
      <ShopView />
    </Applayout>
  );
}
