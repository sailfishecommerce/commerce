import dynamic from "next/dynamic";

import Applayout from "@/layout/Applayout";
import { categoryType } from "@/types";
import getStoreCategories from "@/lib/getStoreCategories";
import CategoryMetatag from "@/components/Metatag/CategoryMetatag";

const ShopView = dynamic(() => import("@/components/View/ShopView"));

interface collectionProps {
  collection: categoryType;
}
export default function Category({ collection }: collectionProps): JSX.Element {
  return (
    <Applayout
      title={`${collection.name} | Free Delivery to HK | Live healthy Online Store`}
    >
      <CategoryMetatag collection={collection} />
      <ShopView menu={collection.name} />
    </Applayout>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const storeCategories: any[] = await getStoreCategories();

  const collection = storeCategories?.filter(
    (collection: { slug: any }) => collection?.slug === params.slug
  );

  return {
    props: {
      collection: collection[0],
    },
  };
}

export async function getStaticPaths() {
  const storeCategories: any[] = await getStoreCategories();

  return {
    paths:
      storeCategories?.map(
        (collection: { slug: any }) => `/shop/product-type/${collection.slug}`
      ) || [],
    fallback: false,
  };
}
