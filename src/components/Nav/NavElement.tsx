import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { useAppDispatch } from "@/redux/store";
import {
  toggleMobileMenu,
  updateMobileMenu,
  toggleNav,
} from "@/redux/ui-slice";
import { useMediaQuery } from "@/hooks";
import Tooltip from "@/components/Tooltip";

export function NavToggler() {
  const tabWidth = useMediaQuery("(max-width:768px)");
  const dispatch = useAppDispatch();

  function showNavMenuDesktop() {
    dispatch(toggleNav());
  }

  function toggleMobileMenuHandler() {
    dispatch(toggleMobileMenu());
    dispatch(updateMobileMenu("mobileNav"));
  }

  const onToggleNav = tabWidth ? toggleMobileMenuHandler : showNavMenuDesktop;

  return (
    <button onClick={showNavMenuDesktop} className="mb-0 mt-2">
      <Tooltip text="Expand menu">
        <AiOutlineMenu className="hover:text-red-500" size={20} />
      </Tooltip>
    </button>
  );
}

interface authorizedViewProps {
  userLogout: () => void;
  userDetail: {
    firstName: string;
    lastName: string;
  };
}

export default function AuthorizedView({
  userLogout,
  userDetail,
}: authorizedViewProps) {
  return (
    <div className="flex items-center">
      <AiOutlineUser />
      <div className="text flex flex-col">
        <div className="cursor-pointer">
          <span className="navbar-tool-tooltip">
            Welcome {userDetail.firstName}
          </span>
          <div className="mx-3">
            <div className="flex flex-col mr-3">
              <span>Hello,</span>{" "}
              <span className="text-blue-500 font-bold">
                {`${userDetail.lastName} ${userDetail.firstName}`}{" "}
              </span>
            </div>
          </div>
        </div>
        <div onClick={userLogout} className="logout-user cursor-pointer">
          <span className="mx-1">Logout</span>
          <p className="logout mb-0 hover:text-red-500">Logout</p>
        </div>
      </div>
    </div>
  );
}
