import dynamic from "next/dynamic";

import useMediaQuery from "@/hooks/useMediaQuery";
import TopNav from "@/components/Nav/TopNav";
import { useAppSelector } from "@/hooks/useRedux";
import useNavStyle from "@/hooks/useNavStyle";

const BottomNav = dynamic(() => import("@/components/Nav/BottomNav"));

export default function Nav() {
  const { navStyle } = useNavStyle();
  const tabWidth = useMediaQuery("(max-width:768px)");
  const { showNav } = useAppSelector((state) => state.UI);

  return (
    <nav className={`w-full bg-white ${navStyle}`}>
      <div className="container relative mx-auto flex flex-col items-center justify-between border-b bg-white py-4">
        <TopNav />
        {!tabWidth && showNav && <BottomNav />}
      </div>
    </nav>
  );
}
