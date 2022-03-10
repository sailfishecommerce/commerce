import Link from "next/link";
import { cartType } from "@/types";
import FormattedPrice from "@/components/Price/FormattedPrice";

interface Props {
  link?: string;
  title: string;
  icon: JSX.Element;
  cart?: cartType;
}

function BottomTabCartItem({ cart, icon, title }) {
  return (
    <a className="relative flex flex-col justify-center w-1/4 items-center">
      <div className="cart flex relative w-1/3">
        {icon}
        {cart && (
          <span className="absolute top-0 right-0 -mt-2 text-xs text-white justify-center bg-red-500 rounded-full h-4 w-4 flex items-center">
            {cart?.items?.length}
          </span>
        )}
      </div>
      {cart ? (
        <FormattedPrice price={cart?.subTotal} />
      ) : (
        <p className="mb-0 text-sm">{title}</p>
      )}
    </a>
  );
}

function BottomTabItemView({ icon, title }) {
  const bordered = title === "Menu" ? "border-x" : "";
  return (
    <a
      className={`flex flex-col justify-center w-1/4 items-center ${bordered}`}
    >
      {icon}
      <p className="mb-0 text-sm">{title}</p>
    </a>
  );
}

export function BottomTabItem({ link, title, icon, cart }: Props) {
  console.log("link",  link);
  return (
    <>
      {link ? (
        <Link href={link} passHref>
          {cart ? (
            <BottomTabCartItem cart={cart} icon={icon} title={title} />
          ) : (
            <BottomTabItemView icon={icon} title={title} />
          )}
        </Link>
      ) : (
        <BottomTabItemView icon={icon} title={title} />
      )}
    </>
  );
}
