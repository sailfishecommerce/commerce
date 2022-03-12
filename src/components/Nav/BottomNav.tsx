import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";

import { useAppSelector } from "@/hooks/useRedux";
import menuLink from "@/json/menu.json";
import useMediaQuery from "@/hooks/useMediaQuery";

const CategoryDropdown = dynamic(
  () => import("@/components/Dropdown/CategoryMenuDropdown")
);

export default function BottomNav() {
  const [hoverCollection, setHoverCollection] = useState(false);
  const { userDetail }: any = useAppSelector((state) => state.auth);
  const router = useRouter();
  const tabWidth = useMediaQuery("(max-width:768px)");

  return (
    <div className="flex items-center w-full h-12 border-t" id="navbarCollapse">
      {tabWidth && (
        <small className="mx-0 my-2 text-danger font-bold">
          Hello, {userDetail.name ? userDetail.name : "Guest"}
        </small>
      )}
      <div className="flex w-full relative">
        <ul className="flex mx-2">
          <li className="nav-item dropdown relative">
            <span
              className="nav-link hover:text-red-500 flex items-center"
              onMouseEnter={() => setHoverCollection(true)}
              onMouseLeave={() => setHoverCollection(false)}
              data-bs-toggle="dropdown"
            >
              <IoGridOutline className="mx-1" />
              Collections
              <AiFillCaretDown />
            </span>
          </li>
        </ul>
        <ul className="flex md:flex-row flex-col mx-2">
          {menuLink.map((menu) => {
            const style = router.asPath === menu.link ? "active" : "";
            return (
              <li
                key={menu.link}
                className={`nav-item w-1/3 mx-6 flex flex-col dropdown ${style}`}
              >
                <Link href={menu.link} passHref>
                  <a
                    aria-label={menu.name}
                    className="nav-link hover:text-red-500"
                  >
                    {menu.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        {hoverCollection && <CategoryDropdown onHover={setHoverCollection} />}
      </div>
    </div>
  );
}
