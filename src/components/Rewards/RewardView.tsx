/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { MdCancel } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import WidgetView from "@/components/Rewards/WidgetView";

import { useAppDispatch } from "@/hooks/useRedux";
import { updateStage, updateWidget } from "@/redux/reward-slice";

interface Props {
  content: {
    title: string;
    items: {
      icon: string;
      text1: string;
      text2: string;
    }[];
  };
}

export default function RewardView({ content }: Props) {
  return (
    <WidgetView title="Sailfish + Rewards">
      <div className="rewards-list">
        <h4 className="text-center font-medium -mt-2 text-lg">{content.title}</h4>
        <ul className="list">
          {content.items.map((item: any) => (
            <li key={item.text1} className="flex items-center border-b">
              <img src={item.icon} className="mr-3" alt={item.text1} />
              <span className="flex flex-col my-1">
                <h6 className="text-md font-medium">{item.text1}</h6>
                <p className="text-sm my-1">{item.text2}</p>
              </span>
            </li>
          ))}
        </ul>
        <div className="text-center text-sm my-2">
          Join now for free to start earning
        </div>
        <button
          aria-label="Join sailfish pro club"
          className="button-view p-1 my-1 px-2 mx-auto flex justify-center text-white rounded-lg"
        >
          Join now
        </button>
        <p className="signin text-center">
          Already have an account?{" "}
          <Link href="/">
            <a className="signin-text text-red-500 font-bold">Sign in</a>
          </Link>
        </p>
      </div>
      <style jsx>{`
        button.button-view {
          background-color: #f79f24;
        }
      `}</style>
    </WidgetView>
  );
}
