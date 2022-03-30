import { useQuery, useQueryClient } from "react-query";

import { useAccount } from "@/hooks";

export default function useUserDetails() {
  const queryClient = useQueryClient();
  const { getUserAccount } = useAccount();
  const { data: userDetails, status } = useQuery(
    "userdetails",
    getUserAccount,
    {
      placeholderData: () => queryClient.getQueryData("userdetails"),
    }
  );

  return [userDetails, status];
}
