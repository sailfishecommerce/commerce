import Dropdown from "@/components/Dropdown";
import DropdownItem from "@/components/Dropdown/DropdownItem";

import { connectSortBy } from "react-instantsearch-dom";

const SortBy = ({ items, refine, createURL }: any) => {
  function onClickHandler(e: any, item: any) {
    e.preventDefault();
    refine(item.value);
    createURL(item.value);
  }

  return (
    <Dropdown className="" dropdownText="Sort by">
      <span className="text-center font-bold flex justify-center">Sort by</span>
      {items.map((item: any) => {
        const dropdownClassName = item.isRefined ? "font-bold" : "fst-normal";
        return (
          <DropdownItem
            key={item.value}
            className={`dropdown-item ${dropdownClassName}`}
            onClick={(e) => onClickHandler(e, item)}
          >
            {item.label}
          </DropdownItem>
        );
      })}
    </Dropdown>
  );
};

const AlgoliaSortby = connectSortBy(SortBy);

export default AlgoliaSortby;
