import { SearchBox } from "react-instantsearch-dom";
import { Configure } from "react-instantsearch-dom";
import dynamic from "next/dynamic";
import { useState, memo } from "react";

import useMediaQuery from "@/hooks/useMediaQuery";
import { useAppDispatch } from "@/hooks/useRedux";
import { updateQuery } from "@/redux/algolia-slice";

const SearchbarHits = dynamic(
  (): any => import("@/components/Algolia/SearchbarHit")
);

const AlgoliaInstantSearch = dynamic(
  (): any => import("@/components/Algolia/AlgoliaInstantSearch")
);

function SearchBarComponent() {
  const [searching, setSearching] = useState(false);
  const dispatch = useAppDispatch();
  const tabWidth = useMediaQuery("(max-width:768px)");

  const inputContainerClassName = !tabWidth ? "search-box w-100" : "my-3";

  function showSearchResult(e: any) {
    if (e.currentTarget.value?.length <= 1) {
      setSearching(true);
    }
    dispatch(updateQuery(e.target.value));
    e.currentTarget.value?.length === 0 && setSearching(false);
  }

  return (
    <>
      <AlgoliaInstantSearch>
        <Configure clickAnalytics distinct enablePersonalization />
        <div className="searchBox relative">
          <div className={inputContainerClassName}>
            <SearchBox
              translations={{
                placeholder: "Search for products...",
              }}
              autoFocus={false}
              showLoadingIndicator
              onChange={showSearchResult}
              className=""
            />
          </div>
          {searching && <SearchbarHits />}
        </div>
      </AlgoliaInstantSearch>
      <style jsx>
        {`
          .searchBox {
            display: flex;
            flex-direction: column;
            width: 55%;
            position: relative;
          }
          @media (max-width: 768px) {
            .searchBox {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
}

const SearchBar = memo(SearchBarComponent);

export default SearchBar;
