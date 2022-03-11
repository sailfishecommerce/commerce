import { BsCart4 } from "react-icons/bs";

export default function NavCartViewMobile({ cart, onClickHandler }) {
  return (
    <button
      onClick={onClickHandler}
      className="cart-icon relative flex flex-col mr-2"
    >
      <span className="absolute top-0 right-0 -mt-2 text-white justify-center bg-red-500 rounded-full h-4 w-4 flex items-center">
        {cart?.items?.length}
      </span>
      <BsCart4 className="mx-2 my-0" size={26} />
    </button>
  );
}
