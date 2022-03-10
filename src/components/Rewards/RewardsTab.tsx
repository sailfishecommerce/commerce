import dynamic from "next/dynamic";

import rewardContent from "@/json/reward.json";
const RewardChat = dynamic(() => import("./RewardChat"));
const RewardView = dynamic(() => import("./RewardView"));

export default function rewardsTab(method: string) {
  switch (method) {
    case "ways-to-earn":
      return <RewardView content={rewardContent.earn} />;
    case "ways-to-redeem":
      return <RewardView content={rewardContent.redeem} />;
    default:
      return <RewardChat />;
  }
}
