import Link from "next/link";
import { memo } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

import Image from "@/components/Image";
import useMarketplaceCategory from "@/hooks/useMarketplaceCategory";

interface PopularCategoryProps {
  category: {
    images: {
      file: {
        url: string;
      };
    }[];
    name: string;
    slug: string;
  };
}

function PopularCategoryComponent({ category }: PopularCategoryProps) {
  const selectedFooterCategory = useMarketplaceCategory();
  const mobileView = useMediaQuery("(max-width:768px)");
  const size = mobileView
    ? { height: 250, width: 315 }
    : { height: 250, width: 320 };

  return (
    <div className="popularCategory w-full md:w-1/2 lg:w-1/3 px-1 mx-0">
      <Link href={`/shop/product-type/${category.slug}`} passHref>
        <a
        aria-label={category.name}
          onClick={() => selectedFooterCategory(category.name)}
          className="imgLink flex w-full flex-col text-center text-decoration-none"
        >
          <Image
            height={size.height}
            width={size.width}
            src={category.images[0].file.url}
            alt={category.name}
            placeholder="blur"
            blurDataURL={category.images[0].file.url}
            loading="lazy"
            size="true"
            className="block rounded-lg mx-1 mb-3"
            layout="responsive"
          />
          <h3 className="fs-base pt-1 mb-0">{category.name}</h3>
        </a>
      </Link>
      <style jsx>
        {`
          .popularCategory a:hover {
            -webkit-transform: scale(1.03);
            -moz-transform: scale(1.03);
            -ms-transform: scale(1.03);
            transform: scale(1.03);
            -webkit-transition: -webkit-transform 300ms ease-in 0s;
            transition: transform 300ms ease-in 0s;
          }

          .popularCategory:hover h3 {
            color: #fb696a;
          }
          @media (max-width: 768px) {
            .imgLink {
              width: 100%;
              height: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}

const PopularCategory = memo(PopularCategoryComponent);

export default PopularCategory;
