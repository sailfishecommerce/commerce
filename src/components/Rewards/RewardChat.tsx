import rewardContent from "@/json/reward.json";
import RewardCard from "@/components/Rewards/RewardCard";
import WidgetView from "@/components/Rewards/WidgetView";

export default function RewardChat() {
  return (
    <WidgetView title="Welcome to Sailfish + Rewards" main>
      {rewardContent.cards.map((card) => (
        <RewardCard card={card} key={card.title} />
      ))}
    </WidgetView>
  );
}
