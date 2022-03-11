import dynamic from "next/dynamic";
import { MdCancel } from "react-icons/md";
import CurrencyDropdown from "@/components/Dropdown/CurrencyDropdown";

const MobileNav = dynamic(() => import("@/components/Nav/MobileNav"));

export default function MobileMenuSidebar() {
  return (
    <div className="fixed top-0 flex flex-col w-4/5 h-full left-0 ">
      <div className="content relative w-full">
        <div className="menu-bar shadow-lg justify-between mx-4 mb-8">
          <h4>Menu</h4>
          <MdCancel className="text-red-500" />
        </div>
        <MobileNav />
        <span className="absolute bottom-30">
          <CurrencyDropdown />
        </span>
      </div>
    </div>
  );
}
