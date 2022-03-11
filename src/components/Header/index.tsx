import { memo } from "react";

import Menu from "@/components/Nav/Menu";
import Topbar from "@/components/Header/Topbar";
import Nav from "@/components/Nav";
import useMediaQuery from "@/hooks/useMediaQuery";

function HeaderComponent() {
  const tabWidth = useMediaQuery("(max-width:768px)");

  return (
    <header className="header shadow-lg">
      <Topbar />
      <Nav />
      {!tabWidth && <Menu />}
    </header>
  );
}
const Header = memo(HeaderComponent);

export default Header;
