import dynamic from "next/dynamic";

import Applayout from "@/layout/Applayout";
import TrendingProducts from "@/components/Products/TrendingProducts";
import HomepageSlider from "@/components/Slider/HomepageSlider";
import BlogBanner from "@/components/Blog/BlogBanner";
import PopularCategories from "@/components/Category/PopularCategories";

const ShopFromCategories = dynamic(
  () => import("@/components/Category/ShopFromCategories")
);

const ShopByBrand = dynamic(
  () => import("@/components/Slider/ShopByBrandSlider")
);

export default function Home() {
  return (
    <Applayout title="Live healthy Store - Quality Australian Products - Free Shipping to HK">
      <HomepageSlider />
      <PopularCategories />
      <TrendingProducts />
      <ShopFromCategories />
      <ShopByBrand />
      <BlogBanner />
    </Applayout>
  );
}
