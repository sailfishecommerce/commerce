import { MdCancel } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";

import { updateWidget, updateStage } from "@/redux/reward-slice";
import { useAppDispatch } from "@/hooks/useRedux";

export default function WidgetHeader({ title, main }) {
  const dispatch = useAppDispatch();

  function closeWidget() {
    dispatch(updateWidget());
  }

  function viewRewardDetails(rewardMethod: string) {
    dispatch(updateStage(rewardMethod));
  }

  return (
    <>
      <div className="chat-header rounded-lg text-white flex h-20 items-center justify-between z-40 static top-0 w-full px-2">
        {!main && (
          <BsArrowLeft
            className="text-2xl font-bold cursor-pointer mx-1"
            onClick={() => viewRewardDetails("default")}
          />
        )}
        <h6 className="mt-2 font-bold text-md text-center lg:text-lg">
          {title}
        </h6>
        <MdCancel
          className="text-2xl font-bold hover:text-red-500 cursor-pointer"
          onClick={closeWidget}
        />
        <style jsx>
          {`
            .chat-header {
              background: linear-gradient(
                135.19deg,
                hsla(35, 93%, 55%, 1),
                hsla(35, 100%, 37%, 1)
              );
            }
          `}
        </style>
      </div>
    </>
  );
}
