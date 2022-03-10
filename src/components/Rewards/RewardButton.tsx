import { AiFillGift } from "react-icons/ai";

interface Props {
  onClick: () => void;
  showChat: boolean;
}

export default function RewardButton({ showChat, onClick }: Props) {
  const buttonClassName = !showChat
    ? "absolute lg:p-2 p-1 px-2"
    : "text-3xl h-10 w-10 top-0";
  return (
    <button
      aria-label="display rewards"
      onClick={onClick}
      className={`${buttonClassName} absolute text-white  right-5 z-50  flex items-center justify-center rounded-full bg-red-500`}
    >
      {!showChat ? (
        <span className="imgContainer flex  justify-center items-center">
          <AiFillGift size={20} />
          <p className="text-xs font-bold mx-1 mb-0">Rewards</p>
        </span>
      ) : (
        <span className="cancel"> &times;</span>
      )}
    </button>
  );
}
