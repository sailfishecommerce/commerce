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
    <nav className="nav container mx-auto flex items-center justify-between border-b bg-white py-4">
      <Logo className="lg:w-3/12" />
      {largerDeviceWidth && <SearchBar />}
      <Navmenu />
    </nav>
  );
}
