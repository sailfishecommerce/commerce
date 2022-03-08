import { memo, useCallback } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useCategoryData } from "@/hooks/useCategory";
import PopularCategory from "@/components/Category/PopularCategory";
import LoadingPopularCategory from "@/components/Loader/PopularCategoryLoader";

function PopularCategoriesComponent() {
  const [data, status] = useCategoryData();
  const mobileView = useMediaQuery("(max-width:950px)");

  const topCategories = data?.results?.filter(
    (category: { topId: string }) => !category.topId
  );
  // get two categories if mobile or 3 categories
  const numberOfCategories = mobileView ? 14 : 15;

  const getFewCategories = useCallback(
    (category: any[], max) =>
      category !== undefined ? category.slice(12, max) : [],
    []
  );

  return (
    <div className="container flex justify-start mx-auto lg:place-self-start">
      <section className="w-5/6 mx-auto lg:mx-0 lg:w-2/3 mb-8 md:w-10/12 shadow-lg flex bg-white -mt-32 relative p-4 rounded-lg">
        <div className="flex flex-col items-center justify-center md:flex-row w-full mx-0">
          {status === "error" ? (
            "Unable to fetch"
          ) : status === "loading" ? (
            <LoadingPopularCategory />
          ) : (
            getFewCategories(topCategories, numberOfCategories).map(
              (category: {
                name: any;
                images: { file: { url: string } }[];
                slug: string;
              }) => <PopularCategory key={category.name} category={category} />
            )
          )}
        </div>
      </section>
    </div>
  );
}

const PopularCategories = memo(PopularCategoriesComponent);
export default PopularCategories;
