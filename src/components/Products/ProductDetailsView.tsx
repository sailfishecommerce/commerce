import FormattedPrice from "@/components/Price/FormattedPrice";

import Rating from "@/components/Rating";
import ProductForm from "@/components/Form/ProductForm";
import discountPrice from "@/lib/discountPrice";

export default function ProductdetailsView({ product }: any) {
  console.log("product", product);
  const { productToView } = product;
  return (
    <div className="w-3/5 pt-4 pt-lg-0">
      <div className="product-details ms-auto pb-3">
        <div className="flex justify-between items-center mb-2">
          <Rating product={productToView} />
        </div>
        <div className="price-group mb-2 flex justify-between items-center">
          <div className="flex price items-center">
            <div className="text-accent mx-2 fs-lg">
              <FormattedPrice price={productToView.price} isProduct />
            </div>
            {product.rrp && (
              <del>
                <FormattedPrice price={productToView.rrp} isProduct />
              </del>
            )}
          </div>
          {Number(productToView.rrp) > 0 && (
            <div className="bg-red-500 text-white p-2">{`${discountPrice(
              productToView
            )} %`}</div>
          )}
        </div>
        <ProductForm product={productToView} />
        <div
          className="description quickView-description"
          dangerouslySetInnerHTML={{
            __html: productToView["description"],
          }}
        />
      </div>
      <style jsx>
        {`
          .description {
            height: 350px;
            overflow-y: auto;
          }
        `}
      </style>
    </div>
  );
}
