import Topbar from "@/components/Header/Topbar";
import Nav from "@/components/Nav";
import { memo } from "react";

function HeaderComponent() {
  return (
    <header className="header">
      <Topbar />
      <Nav />
    </header>
  );
}
const Header = memo(HeaderComponent);

export default Header;
