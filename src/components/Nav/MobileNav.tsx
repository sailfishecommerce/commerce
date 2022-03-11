import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoGridOutline } from "react-icons/io5";

import SearchBar from "@/components/Algolia/Searchbar";
import menuLink from "@/json/menu.json";

const MobileCategoryList = dynamic(
  () => import("@/components/Dropdown/CategoryMobileDropdown")
);

export default function MobileNav({onClose}) {
  const router = useRouter();
  const [toggleCollection, setToggleCollection] = useState(false);

  function onCollectionMenuHandler() {
    setToggleCollection(!toggleCollection);
  }
  const style = (menu) => (router.asPath === menu.link ? "active" : "");

  return (
    <div className="flex flex-col">
      <SearchBar />
      <ul className="menu-list flex flex-col">
        {menuLink.map((menu) => (
          <li
            key={menu.link}
            className={`menu-list p-2 border-b border-gray-100 ${style(menu)}`}
          >
            <Link href={menu.link} passHref>
              <a onClick={onClose} className="nav-link hover:text-red-500">
                {menu.name}
              </a>
            </Link>
          </li>
        ))}
        <li className="menu-list p-2 dropdown">
          <span
            className="nav-link hover:text-red-500 flex items-center"
            onClick={onCollectionMenuHandler}
            data-bs-toggle="dropdown"
          >
            <IoGridOutline className="mx-1" />
            Collections
          </span>
          {toggleCollection && <MobileCategoryList />}
        </li>
      </ul>
    </div>
  );
}
