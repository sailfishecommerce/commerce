import Applayout from "@/layout/Applayout";
import TrendingProducts from "@/components/Products/TrendingProducts";
import PopularCategories from "@/components/Category/PopularCategories";
import HomepageSlider from "@/components/Slider/HomepageSlider";
import ShopFromCategories from "@/components/Category/ShopFromCategories";
import ShopByBrand from "@/components/Slider/ShopByBrandSlider";
import BlogBanner from "@/components/Blog/BlogBanner";

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
