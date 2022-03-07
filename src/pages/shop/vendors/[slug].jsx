import dynamic from "next/dynamic";

import fetchAllSwellProducts from "@/lib/processPageproduct";
import Metatag from "@/components/Metatag";
import Applayout from "@/layout/Applayout";
import toTitleCase, {
  replaceHypenWithSpace,
  replaceSpaceWithHypen,
} from "@/lib/formatString";

const ShopView = dynamic(() => import("@/components/View/ShopView"));

export default function Vendors({ vendor }) {
  return (
    <Applayout title="Live healthy Store - Quality Australian Products - Free Shipping to HK">
      <Metatag />
      <ShopView vendor={vendor} />
    </Applayout>
  );
}

export async function getStaticProps({ params }) {
  const formatVendor = replaceHypenWithSpace(params.slug);
  const vendor = toTitleCase(formatVendor);

  return {
    props: {
      vendor,
    },
  };
}

export async function getStaticPaths() {
  const productData = await fetchAllSwellProducts();
  const results = await Promise.all(productData);

  console.log("results", results);

  let vendorArray = [];
  results[0].map((result) => vendorArray.push(result.vendor));

  let vendors = [...new Set(vendorArray)];

  return {
    paths:
      vendors?.map(
        (vendor) => `/shop/vendors/${replaceSpaceWithHypen(vendor)}`
      ) || [],
    fallback: false,
  };
}
