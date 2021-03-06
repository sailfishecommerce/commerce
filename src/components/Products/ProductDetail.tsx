import Link from "next/link";
import { useCallback, useState } from "react";
import dynamic from "next/dynamic";

import {
  PaymentNote,
  ShareProductLink,
} from "@/components/Products/ProductView";
import { productType } from "@/types";
import FormattedPrice from "@/components/Price/FormattedPrice";

import Rating from "@/components/Rating";
import ProductForm from "../Form/ProductForm";
import { replaceSpaceWithHypen } from "@/lib/formatString";

interface Props {
  product: productType;
}

const DynamicContactModal = dynamic(
  () => import("@/components/Modal/ContactForMoreModal")
);

export default function ProductDetail({ product }: Props) {
  const [modal, setModal] = useState(false);

  const toggleModal = useCallback(() => setModal(!modal), [modal]);

  return (
    <div className="w-full lg:w-1/3 pt-4 lg:pt-0">
      <DynamicContactModal
        show={modal}
        onHide={toggleModal}
        productName={product.name}
      />
      <div className="flex justify-between items-center mb-2 w-full">        
        <div className="flex items-center flex-col md:flex-row">
          <span className="text-blue-800 font-bold text-xl mx-1">
            <FormattedPrice
              className="lg:text-xl"
              price={product.price}
              isProduct
            />
          </span>
          {product.rrp && (
            <span className="text-blue-800 text-xl mx-1">
              <del>
                <FormattedPrice
                  className="lg:text-xl"
                  price={product.rrp}
                  isProduct
                />
              </del>
            </span>
          )}
        </div>
        <Rating product={product} />
      </div>
      <ProductForm product={product} />
      <div className="flex my-2 flex-col md:flex-row items-center justify-between">
        <Link
          href={`/shop/vendors/${replaceSpaceWithHypen(product.vendor)}`}
          passHref
        >
          <a  aria-label={product.vendor} className="underline px-0 text-blue-500 hover:text-red-500">
            + All {product.vendor} products
          </a>
        </Link>
        <button
          aria-label="Contact for more"
          onClick={toggleModal}
          className="font-medium text-red-500 hover:underline"
        >
          Not enough? Contact us for more
        </button>
      </div>
      <ShareProductLink />
      <PaymentNote />
    </div>
  );
}
