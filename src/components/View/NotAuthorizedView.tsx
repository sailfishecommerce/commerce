import { AiOutlineUser } from "react-icons/ai";

import Tooltip from "@/components/Tooltip";

interface NotAuthorizedViewProps {
  toggleAuthModalHandler: () => void;
}

export default function NotAuthorizedView({
  toggleAuthModalHandler,
}: NotAuthorizedViewProps) {
  return (
    <div
      className="flex items-center hover:text-red-500"
      onClick={toggleAuthModalHandler}
    >
      <AiOutlineUser fontSize={24} className="mx-2" />
      <Tooltip text="Sign-in / Sign-up ">
        <div className="w-full flex flex-col hidden md:flex items-start">
          <span className="text-xs">Hello, Sign in</span>
          <h6 className="text-lg">My Account</h6>
        </div>
      </Tooltip>
    </div>
  );
}
