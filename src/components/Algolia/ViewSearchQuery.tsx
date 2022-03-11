import { Highlight } from "react-instantsearch-dom";
import Link from "next/link";
import { hitType } from "@/types";
import { useAppSelector } from "@/hooks/useRedux";
import { useRouter } from "next/router";

import Image from "@/components/Image";
import useAlgoliaEvents from "@/hooks/useAlgoliaEvents";
import { useAppDispatch } from "@/redux/store";
import { closeSearch, updateViewSearch } from "@/redux/algolia-slice";

interface SearchHitsProps {
  hits: hitType[];
}

export default function ViewSearchQuery({ hits }: SearchHitsProps) {
  const formattedHit = hits.slice(0, 6);
  const { query } = useAppSelector((state) => state.algolia);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { clickedItemAfterSearch } = useAlgoliaEvents();

  function viewHits() {
    dispatch(updateViewSearch());
    dispatch(closeSearch());
    router.push({ pathname: "/search", query: { query } });
  }

  return (
    <div className="w-full flex searchbarhit absolute bg-white shadow-lg z-20 top-12 px-6 py-4">
      <div className="w-1/4">
        <h6 className="text-lg font-medium">Popular Suggestions</h6>
        {hits.length > 0 && (
          <button
            aria-label="view all searched product"
            onClick={viewHits}
            className="bg-red-500 text-sm p-2 text-white rounded-md my-2 hover:bg-white hover:text-red-500 hover:border-red-500 border-2 border-red-500"
          >
            VIEW ALL {hits.length} ITEMS{" "}
          </button>
        )}
      </div>
      <div className="w-3/4">
        <h6 className="text-xl font-medium">Products</h6>
        {formattedHit.length > 1 ? (
          <ul className="ais-Hits-list flex flex-wrap">
            {formattedHit.map((hit, index) => (
              <li className="ais-Hits-item" key={index}>
                <Link
                  href={`/products/${hit.slug}?query-id=${hit.__queryID}`}
                  passHref
                >
                  <a
                    aria-label={hit.name}
                    onClick={() =>
                      clickedItemAfterSearch(
                        hit.__queryID,
                        [hit.objectID],
                        [hit.__position],
                        "product clicked after a search"
                      )
                    }
                    className="hit flex items-center my-0 py-1 hover:text-red-500"
                  >
                    <div className="hit-image pr-2">
                      <Image
                        src={hit.images[0]?.file?.url}
                        alt={hit.name}
                        className="productImage"
                        height={70}
                        width={100}
                        placeholder="blur"
                        blurDataURL={hit.images[0]?.file?.url}
                        loading="lazy"
                      />
                    </div>
                    <div className="hit-content flex">
                      <h6 className=" font-medum">
                        <Highlight attribute="name" hit={hit} />
                      </h6>
                      <div className="price fw-bold"> ${hit.price}</div>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Start typing for search results</p>
        )}
      </div>
      <style jsx>
        {`
          .hit-content.flex h6 {
            font-size: 13px;
            padding: 0px;
            white-space: nowrap;
            width: 180px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .hit-content.flex {
            flex-direction: column;
          }
          .price {
            font-size: 13px;
          }
          .hit-image {
            height: 70px;
            width: 100px;
          }
          .searchBox {
            display: flex;
            flex-direction: column;
            width: 55%;
          }
          .navbar-tool:hover .logout {
            color: red;
          }
          .results {
            position: absolute;
            z-index: 100;
            background-color: white;
            left: 6%;
            width: 85%;
            height: 380px;
            overflow: auto;
            margin-top: 1%;
            border-radius: 0;
            padding: 16px;
            box-shadow: 0px 8px 16px 0px #33333329;
          }
          .results h6 {
            line-height: 1;
            text-transform: uppercase;
            border-bottom: 1px solid #333;
            font-weight: 500;
            color: #333;
            font-size: 14px;
            letter-spacing: 0;
            margin: 0 8px 0;
            padding-bottom: 7px;
            margin-bottom: 4px;
          }
          .search-box {
            position: relative;
          }
          button.btn.btn-primary {
            border-radius: 0px;
            margin-top: 10px;
          }
          @media (max-width: 768px) {
            .results {
              z-index: 1000;
              left: 5%;
              top: 24%;
              padding: 0px;
              width: 90%;
            }
          }
        `}
      </style>
    </div>
  );
}
