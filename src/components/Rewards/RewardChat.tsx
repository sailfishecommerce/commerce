import { MdCancel } from "react-icons/md";

import { useAppDispatch } from "@/hooks/useRedux";
import rewardContent from "@/json/reward.json";
import { updateWidget } from "@/redux/reward-slice";
import RewardCard from "./RewardCard";

export default function RewardChat() {
  const dispatch = useAppDispatch();

  function closeWidget() {
    dispatch(updateWidget());
  }

  return (
    <>
      <div className="reward-chat-box rounded-xl bg-white flex flex-col z-30 h-3/5 fixed bottom-28 right-5 w-2/3">
        <div className="relative flex flex-col justify-center mx-auto items-center">
          <div className="chat-header rounded-full text-white flex h-1/3 items-center -mt-10 justify-between sticky z-40 -top-5 w-full">
            <h6 className="mt-2 font-bold text-md lg:text-lg">
              Welcome to Sailfish + Rewards
            </h6>
            <MdCancel
              className="text-2xl font-bold hover:text-red-500 cursor-pointer"
              onClick={closeWidget}
            />
          </div>
          <div className="card-group mt-4 w-4/5 flex flex-col justify-center items-center mx-auto">
            {rewardContent.cards.map((card) => (
              <RewardCard card={card} key={card.title} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .chat-header {
            background: linear-gradient(
              135.19deg,
              hsla(35, 93%, 55%, 1),
              hsla(35, 100%, 37%, 1)
            );
          }
          .reward-chat-box {
            box-shadow: 0 0 13px 0 rgb(0 0 0 / 9%);
            overflow: hidden;
          }
          .card-group {
            overflow-y: scroll;
            overflow-x: auto;
          }
          @media (max-width: 768px) {
            .chat-header {
              height: 80px;
              padding: 10px;
              padding-left: 20px;
              border-radius: 20px;
            }
            .reward-chat-box {
              overflow: scroll;
            }
          }
        `}
      </style>
    </>
  );
}
