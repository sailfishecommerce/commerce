import { useQuery, useQueryClient } from "react-query";

import useSwellProducts from "@/hooks/useSwellProducts";

export default function useCategoryProducts(pageProduct) {
  const queryClient = useQueryClient();
  const { getProductsInCategory } = useSwellProducts();

  const { data, status } = useQuery(
    "getProductsInCategory",
    () => getProductsInCategory(pageProduct.product_type),
    {
      placeholderData: () => queryClient.getQueryData("getProductsInCategory"),
    }
  );

  return [data, status];
}
