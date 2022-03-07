import dynamic from "next/dynamic";
import useScroll from "@/hooks/useScroll";
import Logo from "@/components/Logo";
import Navmenu from "@/components/Nav/Navmenu";
import useMediaQuery from "@/hooks/useMediaQuery";

const SearchBar = dynamic(() => import("@/components/Algolia/Searchbar"));

export default function Nav() {
  const { scroll } = useScroll();
  const scrollUp = Number(scroll) > 400 ? true : false;
  const navStyle = scrollUp ? "navbar-sticky navbar-stuck" : "navbar-sticky";
  const largerDeviceWidth = useMediaQuery("(min-width:768px)");

  return (
    <nav className="nav bg-white w-full h-24 lg:h-32 flex items-center border-b-2 shadow-sm">
      <div className="container m-auto flex justify-between items-center">
        <Logo />
        {largerDeviceWidth && <SearchBar />}
        <Navmenu />
      </div>
    </nav>
  );
}
