/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useState } from "react";
import { IoGridOutline } from "react-icons/io5";

import { useAppSelector } from "@/hooks/useRedux";
import menuLink from "@/json/menu.json";
import useMediaQuery from "@/hooks/useMediaQuery";

const CategoryDropdown = dynamic(
  () => import("@/components/Dropdown/CategoryMenuDropdown")
);
const SearchBar = dynamic(() => import("@/components/Algolia/Searchbar"));

export default function Menu() {
  const { userDetail }: any = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [toggleCollection, setToggleCollection] = useState(false);
  const tabWidth = useMediaQuery("(max-width:768px)");
  const largerDeviceWidth = useMediaQuery("(min-width:768px)");

  function onCollectionMenuHandler() {
    setToggleCollection(!toggleCollection);
  }

  return (
    <div className="navbar">
      <div className="container md:h-20 mx-auto items-center flex">
        <div className="flex items-center" id="navbarCollapse">
          {tabWidth && (
            <small className="ms-0 my-2 text-danger fw-bold">
              Hello, {userDetail.name ? userDetail.name : "Guest"}
            </small>
          )}
          {tabWidth && <SearchBar />}
          {/*<!-- Departments menu-->*/}
          <ul className="flex mx-2">
            <li className="nav-item dropdown">
              <span
                className="nav-link hover:text-red-500 flex items-center"
                onClick={onCollectionMenuHandler}
                data-bs-toggle="dropdown"
              >
                <IoGridOutline className="mx-1" />
                Collections
              </span>
              {largerDeviceWidth && <CategoryDropdown />}
            </li>
          </ul>
          <ul className="flex md:flex-row flex-col mx-2">
            {menuLink.map((menu) => {
              const style = router.asPath === menu.link ? "active" : "";
              return (
                <li
                  key={menu.link}
                  className={`nav-item w-1/3 mx-2 flex flex-col dropdown ${style}`}
                >
                  <Link href={menu.link} passHref>
                    <a className="nav-link hover:text-red-500">{menu.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
