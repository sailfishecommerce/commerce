import Logo from "@/components/Logo";
import Navmenu from "@/components/Nav/Navmenu";
import SearchBar from "@/components/Algolia/Searchbar";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function TopNav() {
  const largerDeviceWidth = useMediaQuery("(min-width:768px)");

  return (
    <div className="flex w-full items-center justify-between px-4 md:px-0">
      <Logo className="lg:w-3/12" />
      {largerDeviceWidth && <SearchBar />}
      <Navmenu />
    </div>
  );
}
