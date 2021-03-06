import FormattedPrice from "@/components/Price/FormattedPrice";

import RatingStar from "@/components/Rating/RatingStar";

export default function ProductPriceView({ product }: any) {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <ul className="product-price flex flex-col items-start justify-between">
        <li className="text-md font-medium">
          <div className="text-blue-800">
            <FormattedPrice
              className="font-bold text-sm"
              price={product.price}
              isProduct
            />
          </div>
        </li>
        {product.rrp && (
          <li className="text-left -mt-2">
            <del className="text-md text-blue-800">
              <FormattedPrice
                price={product.rrp}
                className="md:text-sm text-xs"
                isProduct
              />
            </del>
          </li>
        )}
      </ul>
      <div className="reviewRating flex flex-col">
        <RatingStar rate={product.rating} />
        {product.review_rating ? (
          <p className="text-sm">
            {product.review_rating === 1
              ? `${product.review_rating} review`
              : `${product.review_rating} reviews`}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
