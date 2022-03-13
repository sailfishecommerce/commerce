import dynamic from "next/dynamic";
import { MdCancel } from "react-icons/md";
import CurrencyDropdown from "@/components/Dropdown/CurrencyDropdown";
import { useAppSelector } from "@/hooks/useRedux";
import { useAppDispatch } from "@/redux/store";
import { toggleMobileMenu } from "@/redux/ui-slice";

const MobileNav = dynamic(() => import("@/components/Nav/MobileNav"));
const FilterNav = dynamic(() => import("@/components/Nav/FiltersNav"));

export default function MobileMenuSidebar() {
  const { mobileMenu } = useAppSelector((state) => state.UI);
  const dispatch = useAppDispatch();

  function onCloseSidebar() {
    dispatch(toggleMobileMenu());
  }

  const menuText = mobileMenu === "filterNav" ? "Filters" : "Menu";
  return (
    <div className="fixed top-0 flex left-0 w-full h-full z-40">
      <div className="w-11/12 flex border-r h-full bg-white">
        <div className="content relative w-full h-full px-4">
          <div className="menu-bar h-12 px-4 my-4 border flex items-center shadow-md justify-between mb-4">
            <h4 className="font-bold">{menuText}</h4>
            <MdCancel
              onClick={onCloseSidebar}
              className="text-red-500"
              size={24}
            />
          </div>
          {mobileMenu === "mobileNav" ? (
            <MobileNav onClose={onCloseSidebar} />
          ) : (
            <FilterNav />
          )}
          <span className="absolute bottom-24 w-full flex">
            <CurrencyDropdown up />
          </span>
        </div>
      </div>
      <div
        onClick={onCloseSidebar}
        className="w-1/12 bg-gray-800 bg-opacity-60"
      ></div>
    </div>
  );
}
