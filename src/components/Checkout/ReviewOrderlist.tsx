import Image from "next/image";

export default function ReviewOrderlist({ content }) {
  return (
    <div className="flex items-center hover:bg-gray-100 border border-b border-gray-100 justify-between p-4">
      <Image
        src={content.product.images[0].file.url}
        alt={content.product.name}
        height={70}
        width={100}
      />
      <div className="text flex flex-col">
        <span className="product-name">
          <h4 className="font-medium my-1">{content.product.name}</h4>
        </span>
        <div className="quantity">
          <span className="font-medium">Qty: </span>{" "}
          <input
            className="w-12 border border-gray-200 rounded-md text-center font-bold"
            type="text"
            value={content.quantity}
            readOnly
          />
        </div>
      </div>
      <style jsx>
        {`
          .product-name h4 {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            width: 200px;
          }
        `}
      </style>
    </div>
  );
}
