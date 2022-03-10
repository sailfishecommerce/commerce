/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { useAppDispatch } from "@/hooks/useRedux";
import { updateStage } from "@/redux/reward-slice";

interface Props {
  card: {
    title: string;
    text: string;
    type: string;
    links?: {
      icon: string;
      title: string;
      route?: string;
      text?: string;
    }[];
  };
}

export default function RewardCard({ card }: Props) {
  const dispatch = useAppDispatch();
  function viewRewardDetails(rewardMethod: string) {
    dispatch(updateStage(rewardMethod));
  }
  return (
    <>
      <div className="w-full shadow border md:text-sm text-sm my-2 rounded-lg p-2 px-4">
        <h6 className="font-bold text-center">{card.title}</h6>
        <p className="text-center">{card.text}</p>
        {card.type === "button" && (
          <div className="button-view flex flex-col">
            <Link href="/my-account" passHref>
              <button
                aria-label="join sailfish rewards"
                className="p-1 my-1 px-2 mx-auto flex justify-center text-white rounded-lg"
              >
                Join Now
              </button>
            </Link>
            <p className="text-center">
              Already have an account ?{" "}
              <Link href="/my-account" passHref>
                <a className="text-red-500">Sign in</a>
              </Link>
            </p>
          </div>
        )}
        {card.type !== "button" && (
          <ul className="menu-link">
            {card.type === "links"
              ? card?.links?.map((link: any) => (
                  <li
                    key={link.title}
                    onClick={() => viewRewardDetails(link.route)}
                    className="text-sm md:text-md border-b my-1 hover:text-red-500 py-1 links flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <img className="icon mx-2" src={link.icon} alt="icon" />
                      <p className="mb-0">{link.title}</p>
                    </div>
                    <BsArrowRight color="#f79f24" />
                  </li>
                ))
              : card.type === "referrals" &&
                card?.links?.map((item, index) => (
                  <li key={index} className="py-1 flex border-b items-center">
                    <img className="icon" src={item.icon} alt="icon" />
                    <span className="flex flex-col">
                      <h6 className="text-xs text-sm">
                        {item.title} {item.text}
                      </h6>
                    </span>
                  </li>
                ))}
          </ul>
        )}
      </div>
      <style jsx>{`
        .button-view button {
          background-color: #f79f24;
        }
      `}</style>
    </>
  );
}
