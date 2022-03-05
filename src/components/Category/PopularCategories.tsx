import useMediaQuery from "@/hooks/useMediaQuery";
import { useCategoryData } from "@/hooks/useCategory";
import PopularCategory from "@/components/Category/PopularCategory";
import LoadingPopularCategory from "@/components/Loader/PopularCategoryLoader";

export default function PopularCategories() {
  const [data, status] = useCategoryData();
  const mobileView = useMediaQuery("(max-width:768px)");

  const topCategories = data?.results?.filter(
    (category: { topId: string }) => !category.topId
  );
  // get two categories if mobile or 3 categories
  const numberOfCategories = mobileView ? 14 : 15;

  const getFewCategories = (category: any[], max) =>
    category !== undefined ? category.slice(12, max) : [];

  return (
    <div className="container flex justify-start">
      <section className="w-4/5 m-auto lg:w-2/3 mb-8 md:w-5/6 shadow-lg flex bg-white -mt-32 relative p-4 rounded-lg">
        <div className="flex flex-col md:flex-row popularCategoriesRow w-full mx-0">
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
        <style jsx>
          {`
            .popularCategories {
              z-index: 2000;
            }
          `}
        </style>
      </section>
    </div>
  );
}
