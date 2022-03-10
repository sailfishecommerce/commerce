import { currencySymbolFormatter } from "@/hooks/useCurrency";
import { formatPrice } from "@/lib/formatPrice";

interface formatCurrencyProps {
  price: string | number;
  isProduct?: boolean;
  className?: string;
  currencies: any[];
  currency: any;
}

export default function FormatCurrency({
  price,
  isProduct,
  currencies,
  currency,
  className,
}: formatCurrencyProps): JSX.Element {
  const selectedCurrency = currencies?.filter(
    (currencyP: { code: string }) => currencyP.code === currency
  );
  const nPrice = Number(price);
  const priceRate = nPrice * selectedCurrency[0].rate;

  const productItemPrice = isProduct ? priceRate : nPrice;
  const itemPrice = formatPrice(productItemPrice);
  return (
    <span className={`${className} text-red-600 text-xs md:text-lg`}>
      {currencySymbolFormatter(selectedCurrency[0])}
      {itemPrice}
    </span>
  );
}
