/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { MdCancel } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";

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
  const dispatch = useAppDispatch();

  function viewRewardDetails(rewardMethod: string) {
    dispatch(updateStage(rewardMethod));
  }

  function closeWidget() {
    dispatch(updateWidget());
  }

  return (
    <>
      <div className="rewards-list">
        <div className="header flex justify-between items-center">
          <span className="flex items-center">
            <BsArrowLeft
              className="text-2xl font-bold cursor-pointer mx-1"
              onClick={() => viewRewardDetails("default")}
            />
            <h4 className="text-xl font-bold mx-4">Sailfish + Rewards</h4>
          </span>
          <MdCancel
            className="text-2xl font-bold hover:text-red-500"
            onClick={closeWidget}
          />
        </div>
        <div className="content px-4">
          <h4 className="text-center font-semibold mt-1 text-xl">
            {content.title}
          </h4>
          <ul className="list">
            {content.items.map((item: any) => (
              <li key={item.text1} className="flex items-center">
                <img src={item.icon} className="mr-3" alt={item.text1} />
                <span className="flex flex-col my-1">
                  <h6 className="text-lg font-medium">{item.text1}</h6>
                  <p className="text-md my-1">{item.text2}</p>
                </span>
              </li>
            ))}
          </ul>
          <div className="banner">Join now for free to start earning</div>
          <button aria-label="Join sailfish pro club" className="button">
            Join now
          </button>
          <p className="signin text-center">
            Already have an account?{" "}
            <Link href="/">
              <a className="signin-text text-red-500 font-bold">Sign in</a>
            </Link>
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .signin-text {
            color: #f79f24;
          }
          .rewards-list .header {
            background: linear-gradient(
              135.19deg,
              hsla(35, 93%, 55%, 1),
              hsla(35, 100%, 37%, 1)
            );
            height: 70px;
            width: 100%;
            color: white;
            padding: 10px;
            border-radius: 15px;
          }
          .list-item {
            margin: 15px 0px;
          }
          .list-item span {
            border-bottom: 1px solid #e6e6e6;
            width: 100%;
            padding-bottom: 5px;
            margin-bottom: 5px;
          }
          .list-item h6 {
            font-weight: 400;
            font-size: 15px;
          }
          .list-item p {
            margin-bottom: 0;
            font-size: 13px;
          }
          .rewards-list i {
            cursor: pointer;
          }
          .content button {
            margin: auto;
            border: none;
            color: white;
            background-color: #f79f24;
            padding: 10px;
            border-radius: 5px;
            font-size: 13px;
            margin-bottom: 0px;
            display: flex;
          }
          .content button:hover {
            opacity: 0.8;
          }

          .header span h6 {
            margin-bottom: 0;
            color: white;
            margin-left: 10px;
          }
          .rewards-list {
            display: flex;
            flex-direction: column;
            box-shadow: 0 0 13px 0 rgb(0 0 0 / 9%);
            z-index: 5000;
            position: fixed;
            right: 20px;
            bottom: 100px;
            width: 400px;
            border-radius: 15px;
            background-color: white;
          }
          .list-item img {
            height: 40px;
            width: 40px;
            margin-right: 20px;
          }
          .content {
            flex-direction: column;
          }
          .banner {
            background-color: #f4f6fb;
            padding: 16px;
            border-radius: 10px;
            margin: 10px auto;
            width: 80%;
            font-size: 14px;
            text-align: center;
          }
          @media (max-width: 768px) {
            .rewards-list {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  );
}
