/* eslint-disable @next/next/no-img-element */
import { PropsWithChildren } from "react";

import { productType } from "@/types";
import ProductGallery from "@/components/Products/ProductGallery";
import ProductDetail from "@/components/Products/ProductDetail";

interface Props {
  product: productType;
}

interface containerProps {
  children: any;
}

function ProductGalleryDetailsContainer({
  children,
}: PropsWithChildren<containerProps>) {
  return (
    <div className="container m-auto flex flex-col md:flex-row bg-white shadow-lg rounded-lg mb-5 -mt-20 md:p-12 p-3">
      {children}
    </div>
  );
}

export default function ProductGalleryDetails({ product }: Props) {
  return (
    <ProductGalleryDetailsContainer>
      <ProductGallery product={product} />
      <ProductDetail product={product} />
    </ProductGalleryDetailsContainer>
  );
}
