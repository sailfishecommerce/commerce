import Image from "next/image";

export default function ReviewOrderlist({ content }) {
  return (
    <div className="flex items-center border border-b border-gray-100">
      <Image src={content.image} alt={content.name} height={70} width={100} />
      <div className="text flex flex-col">
        <h4 className="font-bold my-1">{content.name}</h4>
        <div className="quantity">
          <span className="font-medium">Qty: </span>{" "}
          <input type="text" value={content.item} readOnly />
        </div>
      </div>
    </div>
  );
}
