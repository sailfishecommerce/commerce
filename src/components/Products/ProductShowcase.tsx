import classNames from "classnames";
import { Configure, Index } from "react-instantsearch-dom";
import InfiniteProductHits from "@/components/Algolia/InfiniteHits";

export type ProductsShowcaseProps = {
  title?: string;
  indexId?: string;
  className?: string;
  hitComponent: React.ComponentType<any>;
  [index: string]: any;
};

export default function ProductShowcase({
  indexId,
  title,
  className,
  hitComponent,
  ...searchParameters
}: ProductsShowcaseProps) {
  return (
    <Index indexName="New_Livehealthy_products_index" indexId={indexId}>
      <Configure {...searchParameters} />

      <section className={classNames("py-4 laptop:py-16", className)}>
        <div className="container">
          {title && (
            <h2 className="text-sm font-semibold tracking-[2px] uppercase mb-3 laptop:mb-6 laptop:ml-3 laptop:heading-3">
              {title}
            </h2>
          )}
          <InfiniteProductHits
            hitComponent={hitComponent}
            animation={false}
            gridClassName="grid-cols-2 laptop:grid-cols-6"
          />
        </div>
      </section>
    </Index>
  );
}
