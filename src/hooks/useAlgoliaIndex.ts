import axios from "axios";

import useCategory from "@/hooks/useCategory";
import useAllProducts from "./useAllProducts";

export default function useAlgoliaIndex() {
  const [data, status] = useAllProducts();
  const { allCategories } = useCategory();
  const categories = allCategories();

  function addProductToAlgoliaIndex() {
    axios
      .post("/api/add-products-to-algolia-index", data?.results)
      .then((response) => {
        console.log("response addProductToAlgoliaIndex", response);
      })
      .catch((error) => console.error("error addProductToAlgoliaIndex", error));
  }

  function addCategoriesToAlgoliaIndex() {
    axios
      .post("/api/add-products-to-algolia-index", categories?.results)
      .then((response) => {
        console.log("response addProductToAlgoliaIndex", response);
      })
      .catch((error) => console.error("error addProductToAlgoliaIndex", error));
  }

  return {
    addProductToAlgoliaIndex,
    status,
    addCategoriesToAlgoliaIndex,
  };
}
