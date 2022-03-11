import Link from "next/link";
import { cartType } from "@/types";
import FormattedPrice from "@/components/Price/FormattedPrice";

interface BottomTabItemViewProps {
  link?: string;
  title: string;
  icon: JSX.Element;
  onToggle?: () => void;
}

interface Props extends BottomTabItemViewProps {
  cart?: cartType;
}

function BottomTabCartItem({ cart, icon, title, link }) {
  return (
    <Link href={link} passHref>
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
    </Link>
  );
}

function BottomTabItemView({
  icon,
  title,
  link,
  onToggle,
}: BottomTabItemViewProps) {
  const bordered = title === "Menu" ? "border-x" : "";
  return (
    <>
      {link ? (
        <Link href={link} passHref>
          <a
            className={`flex focus:text-red-500 flex-col justify-center w-1/4 items-center ${bordered}`}
          >
            {icon}
            <p className="mb-0 text-sm">{title}</p>
          </a>
        </Link>
      ) : (
        <a
          onClick={onToggle}
          className={`flex focus:text-red-500 flex-col justify-center w-1/4 items-center ${bordered}`}
        >
          {icon}
          <p className="mb-0 text-sm">{title}</p>
        </a>
      )}
    </>
  );
}

export function BottomTabItem({ link, title, icon, cart, onToggle }: Props) {
  return (
    <>
      {cart ? (
        <BottomTabCartItem cart={cart} icon={icon} title={title} link={link} />
      ) : link ? (
        <BottomTabItemView icon={icon} title={title} link={link} />
      ) : (
        <BottomTabItemView icon={icon} title={title} onToggle={onToggle} />
      )}
    </>
  );
}
