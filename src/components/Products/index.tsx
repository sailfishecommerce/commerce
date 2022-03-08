import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

import Image from "@/components/Image";
import { ProductProps } from "@/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { replaceSpaceWithHypen } from "@/lib/formatString";
import discountPrice from "@/lib/discountPrice";
import useAlgoliaEvents from "@/hooks/useAlgoliaEvents";
import ProductPriceView from "@/components/Products/ProductPriceView";
import styles from "@/styles/ui.module.css";

const DynamicProductViewForm = dynamic(
  () => import("@/components/Products/ProductViewForm")
);

const DynamicProductMetatags = dynamic(
  () => import("@/components/Metatag/ProductMeta")
);
declare function tcjs(trigger: string, type: string, name: string): any;

export default function Product({
  product,
  forCategory,
  algoliaEvent,
  homepage,
  slider,
}: ProductProps) {
  const { itemViewed, clickedItemAfterSearch } = useAlgoliaEvents();
  const [inHover, setHover] = useState(false);
  const mobileView = useMediaQuery("(max-width:768px)");

  function productViewHandler() {
    itemViewed("product_viewed", [product.objectID]);
  }

  const linkURL =
    algoliaEvent === "search"
      ? `/products/${product.slug}?query-id=${product.__queryID}`
      : `/products/${product.slug}`;

  const productImage =
    inHover && product.images.length > 1
      ? product.images[1]?.file?.url
      : product.images[0]?.file?.url;

  const imageAlt = product.image_alt_text
    ? product.image_alt_text[0]
    : product.name;

  function algoliaClickedProductAfterSearch() {
    if (algoliaEvent) {
      clickedItemAfterSearch(
        product.__queryID,
        [product.objectID],
        [product.__position],
        "product clicked after search"
      );
    }
  }

  const imgSize = mobileView
    ? {
        height: 150,
        width: 150,
      }
    : {
        height: 300,
        width: 300,
      };

  const productClass = homepage
    ? "lg:w-1/4 md:w-1/3 sm:w-full w-1/2"
    : slider
    ? "w-full"
    : "lg:w-1/3 md:w-1/4 w-1/2";

  return (
    <div
      className={`${productClass} relative ${styles.product} hover:shadow-lg rounded-lg p-2`}
    >
      <DynamicProductMetatags product={product} />
      <div className="flex relative flex-col card product-card p-1 md:p-2">
        <div className="flex items-center justify-between absolute top-0 left-0 z-10">
          {product.rrp && (
            <div className="discount-price mt-2">
              {discountPrice(product)} %
            </div>
          )}
        </div>
        <Link href={linkURL} passHref>
          <a onClick={algoliaClickedProductAfterSearch} className="productLink">
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="lg:h-72 lg:80"
            >
              <Image
                height={imgSize.height}
                width={imgSize.width}
                src={productImage}
                alt={imageAlt}
                placeholder="blur"
                blurDataURL={productImage}
                loading="lazy"
                layout="responsive"
              />
            </div>
          </a>
        </Link>
        <div className="flex flex-col p-1 lg:py-3">
          <Link
            href={`/shop/vendors/${replaceSpaceWithHypen(product.vendor)}`}
            passHref
          >
            <a className="text-sm hover:text-red-500">{product.vendor}</a>
          </Link>
          <h3 className="sm:text-sm product-title sm:w-32  md:w-56 lg:w-72 text-md">
            <Link href={`/products/${product.slug}`} passHref>
              <a
                className="hover:text-red-500 product-link"
                onClick={productViewHandler}
              >
                {product.name}
              </a>
            </Link>
          </h3>
          <ProductPriceView product={product} />
        </div>
        {!mobileView && (
          <div className={styles.cartButtons}>
            <DynamicProductViewForm
              product={product}
              algoliaEvent={algoliaEvent}
              forCategory={forCategory}
            />
          </div>
        )}
      </div>
      <hr className="md:hidden" />
      <style jsx>
        {`
          .product-title {
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .product-link {
            white-space: nowrap;
          }

          .discount-price {
            height: 35px;
            width: 50px;
            color: white;
            background-color: #fb696a;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
          }

          @media (max-width: 768px) {
            .productLink img {
              margin: auto;
              display: flex;
            }
            h3.product-title {
              width: 150px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        `}
      </style>
    </div>
  );
}

// Product.whyDidYouRender = true;
