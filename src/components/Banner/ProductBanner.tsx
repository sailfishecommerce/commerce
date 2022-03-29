/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

import { replaceSpaceWithHypen } from "@/lib/formatString";
import { productType } from "@/types";

interface Props {
  product?: productType;
  breadcrumb?: string;
}

export default function ProductBanner({ product, breadcrumb }: Props) {
  const productName = product ? product.name : breadcrumb;
  const titleClassName = breadcrumb ? "lg:text-2xl font-bold" : "";
  return (
    <div className="w-full bg-gray-700 h-24 items-center flex">
      <div className="container flex-col md:flex-row mx-auto items-center flex justify-between">
        <div className="lg:order-2 mb-3 lg:mb-0 lg:pt-2 w-full md:w-1/2">
          <nav aria-label="w-full text-left">
            <ol className="flex flex-wrap md:flex-row mx-auto text-xs md:text-lg text-white justify-center lg:justify-end w-full">
              <li>
                <Link href="/" passHref>
                  <a aria-label="home" className="hover:text-red-500 flex items-center">
                    <AiOutlineHome className="mr-1" />
                    Home
                  </a>
                </Link>
              </li>
              <li className="mx-2">
                <span>&gt;</span>
              </li>
              <li>
                <Link href="/shop" passHref>
                  <a aria-label="shop" className="hover:text-red-500">
                    Shop
                  </a>
                </Link>
              </li>
              {product ? (
                <>
                  <li className="mx-2">
                    <span>&gt;</span>
                  </li>
                  <li>
                    <Link
                      href={`/shop/vendors/${replaceSpaceWithHypen(
                        product.vendor
                      )}`}
                      passHref
                    >
                      <a
                        aria-label={product.vendor}
                        className="hover:text-red-500"
                      >
                        {product.vendor}
                      </a>
                    </Link>
                  </li>
                  <li className="mx-2">
                    <span>&gt;</span>
                  </li>
                  <li
                    className="breadcrumb-item text-gray-400 text-nowrap active"
                    aria-current="page"
                  >
                    {product.name}
                  </li>
                </>
              ) : (
                <>
                  <li className="mx-2">
                    <span>&gt;</span>
                  </li>
                  <li
                    className="breadcrumb-item text-gray-400 text-nowrap active"
                    aria-current="page"
                  >
                    {breadcrumb}
                  </li>
                </>
              )}
            </ol>
          </nav>
        </div>
        <div className="lg:order-1 text-center text-xs md:text-lg md:text-left md:w-1/2 w-full">
          <h1 className={`${titleClassName} text-lg text-white mb-0 md:text-xl`}>
            {productName}
          </h1>
        </div>
      </div>
    </div>
  );
}
