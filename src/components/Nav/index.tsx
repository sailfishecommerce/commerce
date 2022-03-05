import Logo from "@/components/Logo";
import Input from "@/components/Form/Input";
import Navmenu from "@/components/Nav/Navmenu";

export default function Nav() {
  return (
    <nav className="nav bg-white w-full h-24 lg:h-32 flex items-center border-b-2 shadow-sm">
      <div className="container flex justify-between items-center">
        <Logo />
        <Input
          className="lg:w-7/12 md:5/7 h-12 mx-4 hidden md:flex"
          placeholder="Search for products..."
        />
        <Navmenu />
      </div>
    </nav>
  );
}
