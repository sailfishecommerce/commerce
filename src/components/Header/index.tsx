import Topbar from "@/components/Header/Topbar";
import Nav from "@/components/Nav";

export default function HeaderComponent() {
  return (
    <header className="header shadow-lg">
      <Topbar />
      <Nav />
    </header>
  );
}
