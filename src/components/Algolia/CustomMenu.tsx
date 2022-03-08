import { Menu } from "react-instantsearch-dom";
import { useAppSelector } from "@/hooks/useRedux";

interface Props {
  title: string;
  attribute: "product_type";
}

export default function CustomMenu({ title, attribute }: Props) {
  const { defaultMenuRefinement } = useAppSelector((state) => state.algolia);
  return (
    <>
      <div className="menu">
        <h5 className="mb-2 text-xl font-medium">{title}</h5>
        {defaultMenuRefinement ? (
          <Menu
            searchable={true}
            attribute={attribute}
            defaultRefinement={defaultMenuRefinement}
          />
        ) : (
          <Menu searchable={true} attribute={attribute} />
        )}
      </div>
    </>
  );
}
