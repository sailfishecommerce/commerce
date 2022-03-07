import dynamic from "next/dynamic";
import { useAppSelector } from "./useRedux";

export default function useAlgoliaEvents() {
  const { userToken }: any = useAppSelector((state) => state.user);

  function searchInsight() {
    const aa: any = dynamic((): any =>
      import("search-insights").then(() =>
        console.log("aa search-insight loaded")
      )
    );
    return aa;
  }

  function initializeAlgolia(aa) {
    aa("init", {
      appId: `${process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID}`,
      apiKey: `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}`,
      useCookie: false,
    });
  }

  function itemViewed(eventName: string, objectIDs: string[] | any) {
    const { aa } = searchInsight();
    initializeAlgolia(aa);
    aa("viewedObjectIDs", {
      eventName,
      userToken,
      index: "New_Livehealthy_products_index",
      objectIDs,
    });
  }

  function filterViewed(filters: string[]) {
    const { aa } = searchInsight();
    initializeAlgolia(aa);
    aa("viewedFilters", {
      eventName: "filter_viewed",
      userToken,
      index: "New_Livehealthy_products_index",
      filters,
    });
  }

  function filterClicked(filters: string[]) {
    const { aa } = searchInsight();
    initializeAlgolia(aa);
    aa("clickedFilters", {
      eventName: "filter_clicked",
      userToken,
      index: "New_Livehealthy_products_index",
      filters,
    });
  }

  function productAddedToCart(objectIDs: string[] | any) {
    const { aa } = searchInsight();
    initializeAlgolia(aa);
    aa("convertedObjectIDs", {
      eventName: "product_added_to_cart",
      userToken,
      index: "New_Livehealthy_products_index",
      objectIDs,
    });
  }

  function clickedItem(eventName: string, objectIDs: string[]) {
    const { aa } = searchInsight();
    initializeAlgolia(aa);
    aa("clickedObjectIDs", {
      eventName,
      userToken,
      index: "New_Livehealthy_products_index",
      objectIDs,
    });
  }

  function convertedItemAfterSearch(
    eventName: string,
    queryID: string,
    objectIDs: string[]
  ) {
    const { aa } = searchInsight();
    initializeAlgolia(aa);
    aa("convertedObjectIDsAfterSearch", {
      eventName,
      userToken,
      index: "New_Livehealthy_products_index",
      queryID,
      objectIDs,
    });
  }

  function clickedItemAfterSearch(
    queryID: string,
    objectIDs: string[],
    positions: number[],
    eventName: string
  ) {
    const { aa } = searchInsight();
    initializeAlgolia(aa);
    aa("clickedObjectIDsAfterSearch", {
      index: "New_Livehealthy_products_index",
      userToken,
      eventName,
      queryID,
      objectIDs,
      positions,
    });
  }

  return {
    filterViewed,
    filterClicked,
    productAddedToCart,
    clickedItem,
    itemViewed,
    convertedItemAfterSearch,
    clickedItemAfterSearch,
  };
}

// "Product clicked after a search",
