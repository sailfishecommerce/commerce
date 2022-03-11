import Link from "next/link";

import useCategoryData from "@/hooks/useCategoryData";
import useMarketplaceCategory from "@/hooks/useMarketplaceCategory";

export default function CategoryMobileDropdown() {
  const [categories, status] = useCategoryData();
  const selectedFooterCategory = useMarketplaceCategory();
  const livehealthyCategories = (category: []) => category.slice(12);

  return (
    <ul className="dropdown-menu ms-3 mb-3 widget-list d-flex flex-column">
      {status === "error"
        ? "unable to load collections"
        : status === "loading"
        ? "loading collections"
        : livehealthyCategories(categories.results).map((category: any) => (
            <li key={category.name} className="widget-list-item">
              <Link href={`/collections/${category.slug}`} passHref>
                <a
                  onClick={() => selectedFooterCategory(category.name)}
                  className="widget-list-link"
                >
                  {category.name}
                </a>
              </Link>
            </li>
          ))}
    </ul>
  );
}
