import Script from "next/script";
import { productType } from "@/types";
// import dynamic from "next/dynamic";
// import ProductReviewView from "./ProductReviewView";

// const ProductReviewForm = dynamic(() => import("@/components/Form/ProductReviewForm"));
// const ProductReviewSort = dynamic(
// () => import("@/components/Form/ProductReviewSort")
// );

interface Props {
  product: productType;
}
export default function ProductReviews({ product }: Props) {
  return (
    <div className="border-top my-lg-3 py-5 w-100">
      <Script
        src={`https://en.trustmate.io/api/widget/95d50730-e6a5-4465-b950-3fab710cf306/script?product=/products/${product.slug}`}
        strategy="afterInteractive"
        id="products-widget-script"
      />
      <Script
        src="https://en.trustmate.io/api/widget/5c6b265a-9520-4676-9d01-2ecfca53d95c/script"
        strategy="afterInteractive"
        id="trustmate-widget-script"
      />
      <div className="container pt-md-2" id="reviews">
        {/* <div className="row pt-4">
          <div className="col-md-7">
            <ProductReviewSort />
            <ProductReviewView />
          </div>
          <ProductReviewForm />
        </div> */}
        <div className="flex">
          <div id="95d50730-e6a5-4465-b950-3fab710cf306"></div>
          <div id="5c6b265a-9520-4676-9d01-2ecfca53d95c"></div>
        </div>
      </div>
    </div>
  );
}
