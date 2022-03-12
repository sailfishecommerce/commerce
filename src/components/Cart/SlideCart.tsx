import Link from "next/link";
import { GiShoppingCart } from "react-icons/gi";

import { useAppDispatch } from "@/hooks/useRedux";
import { displayCheckoutModalAction } from "@/redux/ui-slice";
import { CartDiscount, ClearCart } from "@/components/Cart/CartElements";
import SlideCartNote from "@/components/Cart/SlideCartNote";
import FormattedPrice from "@/components/Price/FormattedPrice";
import SlideCartProduct from "@/components/Cart/SlideCartProduct";
import styles from "@/styles/ui.module.css";
import { useCart } from "@/hooks";
import useAirwallexPayment from "@/hooks/useAirwallexPayment";

interface slideCartProps {
  toggle: () => void;
}

export default function SlideCart(props: slideCartProps) {
  const dispatch = useAppDispatch();
  const { disableBtn } = useAirwallexPayment();
  const { useCartData } = useCart();
  const { data: cart } = useCartData();

  function toggleCheckoutModal() {
    dispatch(displayCheckoutModalAction());
    props.toggle();
  }

  const cartStyle = cart?.items?.length === 0 ? "justify-center" : "";

  return (
    <div>
      <div className="slidecart flex items-center h-full position-fixed top-0 w-full justify-between right">
        <div
          onClick={props.toggle}
          className="overlay slidecartOverlay w-3/4 h-screen cursor-pointer"
        />
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-back"
          className={`cart bg-white fixed flex flex-col right-0 ${cartStyle} px-2`}
        >
          {cart?.items?.length > 0 ? (
            <div>
              <div className="cart-body">
                <SlideCartNote />
                <div
                  className={`${styles.slideCart} sidebar-cart-product-wrapper custom-scrollbar`}
                >
                  {cart?.items.map((item: any, index: number) => (
                    <SlideCartProduct key={`item.id-${index}`} item={item} />
                  ))}
                </div>
              </div>
              <div className="cart-footer bg-white px-4">
                <CartDiscount cartItem={0} />
                <ClearCart />
                <div className="mt-6">
                  <h5 className="mt-5 mb-2 subtotal justify-center flex items-center">
                    Subtotal:{" "}
                    <span className="mx-2">
                      {cart ? <FormattedPrice price={cart.subTotal} /> : "0.00"}
                    </span>
                  </h5>
                  <hr />
                </div>
                <Link href="/checkout" passHref>
                  <button
                    aria-label="Proceed to Checkout"
                    disabled={disableBtn}
                    onClick={toggleCheckoutModal}
                    className="w-100 border-2 font-bold hover:bg-red-500 border-red-500 mx-auto p-2 rounded-md justify-center flex items-center"
                    type="button"
                  >
                    <GiShoppingCart className="mr-2" size={20} />
                    <span className="mx-2">PROCEED TO CHECKOUT</span>
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="emptyCart text-center flex justify-center items-center">
              <span className="flex flex-col items-center">
                <GiShoppingCart className="mr-2" size={32} />
                <p className="font-bold text-md md:text-2xl mb-0">
                  Your cart is empty{" "}
                </p>
              </span>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .overlay.slidecartOverlay {
            background-color: #190f0fc4;
          }
          .sidebar-cart-product-wrapper.custom-scrollbar {
            height: 400px;
            overflow-y: auto;
            overflow-x: hidden;
          }
          button.proceedBtn {
            background-color: #373f50;
            font-size: 12px;
          }
          .emptyCart {
            height: 180px;
            width: 180px;
            margin: auto;
            background-color: #fb696a;
            border-radius: 50%;
            color: white;
            font-size: 15px;
            font-weight: bold;
          }
          .slidecart {
            z-index: 2000;
            display: flex;
            position: fixed;
            right: 0;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            height: 100%;
          }
          .overlay {
            width: 75%;
            background-color: #190f0fc4;
            height: 100%;
            position: fixed;
            left: 0;
            top: 0;
          }
          .cart {
            width: 25%;
            right: 0;
            position: fixed;
            height: 100vh;
            overflow-y: auto;
          }
          .subtotal {
            font-size: 20px;
          }
          @media (max-width: 768px) {
            .overlay {
              width: 25%;
            }
            .cart {
              width: 85%;
            }
            .slidecart {
              z-index: 2000;
            }
            .sidebar-cart-product-wrapper.custom-scrollbar {
              height: 300px;
            }
            .subtotal {
              font-size: 16px;
            }
          }
        `}
      </style>
    </div>
  );
}
