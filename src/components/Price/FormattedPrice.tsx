import { useCurrencies } from "@/hooks/useCurrency";
import { LineLoader } from "@/components/Loader/ProductsLoader";
import { useAppSelector } from "@/hooks/useRedux";
import FormatCurrency from "./FormatCurrency";

interface formattedPriceProps {
  price: string | number;
  isProduct?: boolean;
  className?: string;
}

export default function FormattedPrice({
  price,
  isProduct,
  className,
}: formattedPriceProps): JSX.Element {
  const { currencyList } = useCurrencies();
  const { currency } = useAppSelector((state) => state.currencyLanguage);

  return (
    <>
      {currencyList === undefined ? (
        "unable to fetch price"
      ) : currencyList === null ? (
        <LineLoader />
      ) : (
        <FormatCurrency
          price={price}
          isProduct={isProduct}
          currencies={currencyList}
          currency={currency}
          className={className}
        />
      )}
    </>
  );
}
