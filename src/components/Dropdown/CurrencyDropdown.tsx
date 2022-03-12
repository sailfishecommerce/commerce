import Image from "next/image";
import { memo } from "react";

import Dropdown from "@/components/Dropdown";
import DropdownItem from "@/components/Dropdown/DropdownItem";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateCurrency } from "@/redux/currency-language-slice";
import useCurrency, { useCurrencies } from "@/hooks/useCurrency";
import { useToast } from "@/hooks";

interface Props {
  className?: string;
}

function CurrencyDropdownComponent({ className }: Props) {
  const dispatch = useAppDispatch();
  const { isLoading, isSuccessful, hasError } = useToast();
  const { selectCurrencies } = useCurrency();
  const { currencyList } = useCurrencies();

  console.log("currencyList", currencyList);

  const { currency } = useAppSelector((state) => state.currencyLanguage);

  function DropdownText() {
    return (
      <div className="items-center flex">
        <div className={className}>
          <Image
            className="mr-2"
            src="/flags/en.webp"
            width={30}
            height={30}
            alt="en"
          />
        </div>
        <p className="m-0 text-xs md:text-sm md:ml-4 font-bold">{`En / ${currency}`}</p>
      </div>
    );
  }

  function selectCurrency(e: any): any {
    const loading = isLoading();
    return selectCurrencies(e.target.value)
      .then((response) => {
        isSuccessful(loading, `${response.currency} selected`);
        dispatch(updateCurrency(response.currency));
      })
      .catch((error) => {
        hasError(loading, "an error occured, please try again");
        dispatch(updateCurrency("USD"));
        console.error("error", error);
      });
  }

  return currencyList === undefined ? (
    <p>unable to load currencies</p>
  ) : currencyList === null ? (
    <p>loading currencies...</p>
  ) : (
    <Dropdown dropdownText={<DropdownText />}>
      {currencyList &&
        currencyList?.map((item, index) => (
          <DropdownItem onClick={selectCurrency} key={index}>
            {item.symbol} {item.code}
          </DropdownItem>
        ))}
    </Dropdown>
  );
}

const CurrencyDropdown = memo(CurrencyDropdownComponent);
export default CurrencyDropdown;
