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
    <AlgoliaInstantSearch>
      <Configure clickAnalytics distinct enablePersonalization />
      <div className="flex flex-col relative w-5/12">
        <div className={inputContainerClassName}>
          <SearchBox
            translations={{
              placeholder: "Search for over 10,000 products...",
            }}
            className="mx-auto"
            autoFocus={false}
            showLoadingIndicator
            onChange={showSearchResult}
          />
        </div>
      </div>
      {searching && <SearchbarHits />}
    </AlgoliaInstantSearch>
  );
}

const SearchBar = memo(SearchBarComponent);

export default SearchBar;
