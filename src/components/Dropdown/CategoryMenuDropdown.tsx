import Link from "next/link";

import useCategoryData from "@/hooks/useCategoryData";
import { categoryType } from "@/types";
import { addCategoryView } from "@/hooks/useVbout";
import useMarketplaceCategory from "@/hooks/useMarketplaceCategory";
import Image from "../Image";

interface Props {
  category: categoryType;
  categories: categoryType[];
}
function CategoryDropdownList({ category, categories }: Props) {
  const subCategories = categories.filter((cats) => cats.topId === category.id);
  const displayThreeSubCat = subCategories.slice(0, 3);
  const selectedFooterCategory = useMarketplaceCategory();

  function linkHandler(category: any) {
    addCategoryView({
      id: category.id,
      categoryId: category.slug,
      categoryName: category.name,
      categoryLink: `collections/product-type/${category.slug}`,
      categoryImage: category.images[0]?.file?.url,
    });
    selectedFooterCategory(category.name);
  }

  return (
    <div className="flex w-1/4">
      <div className="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
        <div className="widget widget-links">
          <Link href={`/collections/product-type/${category.slug}`} passHref>
            <a
              aria-label="category"
              onClick={() => linkHandler(category)}
              className="categoryImg flex flex-col overflow-hidden rounded-3 mb-3"
            >
              <Image
                src={category?.images[0].file.url}
                alt={category.name}
                height={170}
                width={250}
                className="rounded-lg"
                layout="responsive"
              />
              <h6 className="fs-base my-2">{category.name}</h6>
            </a>
          </Link>
          <ul className="widget-list">
            {displayThreeSubCat.map((cat) => (
              <li key={cat.id} className="widget-list-item mb-1">
                <Link href={`/collections/product-type/${cat.slug}`} passHref>
                  <a aria-label={cat.name} className="widget-list-link">
                    {cat.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .widget.widget-links a:hover {
            -webkit-transform: scale(1.03);
            -moz-transform: scale(1.03);
            -ms-transform: scale(1.03);
            transform: scale(1.03);
            -webkit-transition: -webkit-transform 300ms ease-in 0s;
            transition: transform 300ms ease-in 0s;
          }
          .widget:hover h6 {
            color: #fb696a;
          }
        `}
      </style>
    </div>
  );
}

export default function CategoryDropdown() {
  const [categories, status] = useCategoryData();

  const topCategories = categories?.results?.filter(
    (category: categoryType) => !category.topId
  );

  const firstCategories = topCategories?.slice(9, 17);

  return (
    <div className="dropdown-menu p-2 w-3/4 absolute z-40 flex border top-8 bg-white flex-col rounded-lg">
      {status === "error" ? (
        "unable to fetch categories"
      ) : status === "loading" ? (
        "loading categories"
      ) : (
        <div className="flex flex-wrap w-full mx-auto justify-center">
          {categories
            ? firstCategories.map((category: categoryType) => (
                <CategoryDropdownList
                  key={category.id}
                  category={category}
                  categories={categories?.results}
                />
              ))
            : ""}
        </div>
      )}
    </div>
  );
}
