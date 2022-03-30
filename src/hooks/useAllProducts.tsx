import { useQuery, useQueryClient } from "react-query";

import useSwellProducts from "@/hooks/useSwellProducts";

export default function useAllProducts() {
  const { allProducts } = useSwellProducts();
  const queryClient = useQueryClient();
  const { data, status } = useQuery("allProducts", allProducts, {
    placeholderData: () => queryClient.getQueryData("allProducts"),
  });

  return [data, status];
}
