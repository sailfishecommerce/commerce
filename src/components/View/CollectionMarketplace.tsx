import algoliasearch from "algoliasearch";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Configure } from "react-instantsearch-dom";
import Link from "next/link";
import { InstantSearch } from "react-instantsearch-dom";

import useAlgoliaSearch from "@/hooks/useAlgoliaSearch";
import AlgoliaCurrentRefinement from "@/components/Algolia/AlgoliaCurrentRefinement";
import ShopViewCategories from "@/components/View/ShopViewCategories";
import ShopBannerToolbar from "@/components/Banner/ShopBannerToolbar";
import InfiniteProductHits from "@/components/Algolia/InfiniteHits";

const DEBOUNCE_TIME = 700;

interface MarketplaceProps {
  collection?: {
    name: string;
    slug: string;
  };
}

export default function CollectionMarketplace({
  collection,
}: MarketplaceProps) {
  const router = useRouter();
  const { searchStateToUrl, urlToSearchState, createURL } = useAlgoliaSearch();
  const { asPath } = router;
  const [searchState, setSearchState] = useState<any>(urlToSearchState(asPath));
  const debouncedSetStateRef: any = useRef(null);

  const searchClient = algoliasearch(
    `${process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID}`,
    `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}`
  );

  const onSearchStateChange = (updatedSearchState: string) => {
    clearTimeout(debouncedSetStateRef.current);
    const href = searchStateToUrl(updatedSearchState);

    debouncedSetStateRef.current = setTimeout(() => {
      router.push(href, href, {
        shallow: true,
      });
    }, DEBOUNCE_TIME);

    setSearchState(updatedSearchState);
  };
  return (
    <InstantSearch
      indexName="New_Livehealthy_products_index"
      searchClient={searchClient}
      onSearchStateChange={onSearchStateChange}
      searchState={searchState}
      createURL={createURL}
    >
      <Configure
        hitsPerPage={15}
        clickAnalytics
        distinct
        enablePersonalization={true}
      />
      <div className="w-full flex bg-gray-700 justify-between h-52">
        <div className="container m-auto mb-3 mb-lg-0 pt-lg-2 flex flex-col h-32 relative">
          <nav className="w-full items-start  justify-start flex bg-gray-700 ">
            <ol className="text-white lg:flex justify-center lg:justify-start">
              <li className="mb-0">
                <Link href="/" passHref>
                  <a className="hover:text-red-500">Home</a>
                </Link>
              </li>
              <li className="mx-2">
                <span> &gt; </span>
              </li>
              {collection ? (
                <li className="mb-0 text-red-500">{collection?.name}</li>
              ) : (
                <li className="mb-0 text-red-500">
                  <a>Shop</a>
                </li>
              )}
            </ol>
            <AlgoliaCurrentRefinement />
          </nav>
          <ShopBannerToolbar />
        </div>
      </div>
      <div className="container flex pb-5 mb-2 mb-md-4">
        <ShopViewCategories />
        <section className="w-3/4 flex flex-col">
          <div className="flex flex-wrap">
            <InfiniteProductHits minHitsPerPage={9} animation={true} />
          </div>
          <hr className="mb-2" />
        </section>
      </div>
    </InstantSearch>
  );
}
