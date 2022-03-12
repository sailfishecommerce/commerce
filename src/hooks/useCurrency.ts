/* eslint-disable react-hooks/exhaustive-deps */
import { QueryClient } from "react-query";
import { useEffect, useState } from "react";

import { useAppSelector } from "@/hooks/useRedux";
import useSwell from "@/hooks/useSwell";

export default function useCurrency() {
  const { swellInit } = useSwell();

  const { currency } = useAppSelector((state) => state.currencyLanguage);

  async function listEnabledCurrencies() {
    const { swell } = await swellInit();
    return await swell.currency.list();
  }

  async function selectCurrencies(currency: string) {
    const { swell } = await swellInit();
    return await swell.currency.select(currency);
  }

  async function getSelectedCurrencies() {
    const { swell } = await swellInit();
    return await swell.currency.selected();
  }

  return {
    listEnabledCurrencies,
    selectCurrencies,
    getSelectedCurrencies,
    currency,
  };
}

export function currencySymbolFormatter(currency: {
  symbol: string;
  code: string;
}) {
  const currencyCode = currency ? currency.code : "";
  if (currency.symbol === "$" && currency.code !== "USD") {
    return `${currencyCode} ${currency.symbol}`;
  } else {
    return currency.symbol;
  }
}

export function useCurrencies() {
  const [currencyList, setCurrencyList] = useState<any>(null);
  const { listEnabledCurrencies } = useCurrency();

  useEffect(() => {
    if (currencyList === null) {
      getCurrencies(listEnabledCurrencies)
        .then((response) => setCurrencyList(response))
        .catch((error) => setCurrencyList(error));
    }
  }, []);

  return { currencyList };
}

export async function getCurrencies(listEnabledCurrencies: any) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  return await queryClient.fetchQuery("currencies", listEnabledCurrencies);
}
