import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateWidget } from "@/redux/reward-slice";
import RewardButton from "./RewardButton";
import rewardsTab from "./RewardsTab";

export default function Reward() {
  const { stage, showWidget } = useAppSelector((state) => state.rewardWidget);
  const dispatch = useAppDispatch();

  function displayChat() {
    dispatch(updateWidget());
  }

  return (
    <div className="reward-widget flex fixed z-50 right-0 bottom-24">
      {showWidget && rewardsTab(stage)}
      <RewardButton showChat={showWidget} onClick={displayChat} />
    </div>
  );
}
