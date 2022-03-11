import useScroll from "@/hooks/useScroll";
import Logo from "@/components/Logo";
import Navmenu from "@/components/Nav/Navmenu";
import SearchBar from "@/components/Algolia/Searchbar";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Nav() {
  const { scroll } = useScroll();
  const scrollUp = Number(scroll) > 400 ? true : false;
  const navStyle = scrollUp ? "navbar-sticky navbar-stuck" : "navbar-sticky";
  const largerDeviceWidth = useMediaQuery("(min-width:768px)");

  return (
    <nav className="nav bg-white w-full py-4 md:h-32 flex items-center border-b-2 shadow-sm pb-4">
      <div className="container m-auto flex flex-row items-center justify-between">
        <Logo className="lg:w-3/12" />
        {largerDeviceWidth && <SearchBar />}
        <Navmenu />
      </div>
    </nav>
  );
}
