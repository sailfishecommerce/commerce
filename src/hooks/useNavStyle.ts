import useScroll from "@/hooks/useScroll";

export default function useNavStyle() {
  const { scroll } = useScroll();
  const scrollUp = Number(scroll) > 400 ? true : false;
  const navStyle = scrollUp ? "fixed top-0 z-50 shadow-lg border-b" : "";

  return {navStyle, scrollUp};
}
