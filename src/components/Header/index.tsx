import { memo } from "react";
import Topbar from "@/components/Header/Topbar";
import Nav from "@/components/Nav";
import Menu from "@/components/Nav/Menu";

function HeaderComponent() {
  return (
    <header className="header">
      <Topbar />
      <Nav />
      <Menu />
    </header>
  );
}
const Header = memo(HeaderComponent);

export default Header;
