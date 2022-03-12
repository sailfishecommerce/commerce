import { useAppDispatch } from "@/redux/store";
import {
  toggleMobileMenu,
  updateMobileMenu,
  toggleNav,
} from "@/redux/ui-slice";
import { useMediaQuery } from "@/hooks";

export default function useNav() {
  const tabWidth = useMediaQuery("(max-width:768px)");
  const dispatch = useAppDispatch();

  function showNavMenuDesktop() {
    dispatch(toggleNav());
  }

  function toggleMobileMenuHandler() {
    dispatch(toggleMobileMenu());
    dispatch(updateMobileMenu("mobileNav"));
  }
  const navMenuFunction = tabWidth
    ? toggleMobileMenuHandler
    : showNavMenuDesktop;

  return navMenuFunction;
}
