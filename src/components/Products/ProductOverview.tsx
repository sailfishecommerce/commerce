import dynamic from "next/dynamic";

import ProductDescription from "@/components/Products/ProductDescription";
import ProductGalleryDetails from "@/components/Products/ProductGalleryDetails";
import RelatedProductSlider from "@/components/Slider/RelatedProductSlider";
import SpinnerRipple from "@/components/Loader/SpinnerLoader";
import ProductMainBanner from "@/components/Banner/ProductBanner";
import useCategoryProducts from "@/hooks/useCategoryProducts";

const ProductReviews = dynamic(
  () => import("@/components/Products/ProductReviews")
);

interface ProductOverviewProps {
  pageProduct?: any;
}

export default function ProductOverview({ pageProduct }: ProductOverviewProps) {
  const [data, status] = useCategoryProducts(pageProduct);

  return (
    <>
      <ProductMainBanner product={pageProduct} />
      <ProductGalleryDetails product={pageProduct} />
      <ProductDescription product={pageProduct} />
      <ProductReviews product={pageProduct} />
      {status === "error" ? (
        ""
      ) : status === "loading" ? (
        <SpinnerRipple />
      ) : (
        <RelatedProductSlider relatedProducts={data.results} />
      )}
    </>
  );
}
