import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

import Modal from "@/components/Modal";
import { quickViewModal } from "@/redux/ui-slice";
import { useAppDispatch } from "@/hooks/useRedux";
import ProductGallery from "@/components/Products/ProductGallery";
import ProductdetailsView from "@/components/Products/ProductDetailsView";

interface QuickViewModalProps {
  product: {
    active: boolean;
    productToView: any;
  };
  isMobile?: boolean;
}

function ModalHeader({ productToView }) {
  return (
    <Link href={`/products/${productToView.slug}`} passHref>
      <a
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        title="Go to product page"
        className="flex items-center text-red-500 font-bold hover:text-red-400"
        aria-label={productToView.name}
      >
        {productToView.name}
        <IoIosArrowForward />
      </a>
    </Link>
  );
}

export default function QuickViewModal({
  product,
  isMobile,
}: QuickViewModalProps) {
  const dispatch = useAppDispatch();
  const { productToView } = product;

  function quickViewHandler() {
    dispatch(quickViewModal(product));
  }

  return (
    <Modal
      modal={product.active}
      modalHandler={quickViewHandler}
      header={<ModalHeader productToView={productToView} />}
    >
      <div className="flex">
        <ProductGallery product={productToView} isModal={isMobile} />
        <ProductdetailsView product={product} />
      </div>
      <style jsx>
        {`
          .description {
            height: 400px;
            overflow: auto;
          }
          .description::-webkit-scrollbar {
            width: 1em;
          }

          .description::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          }

          .percentage {
            height: 35px;
            width: 50px;
            color: white;
            background-color: #fb696a;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
          }

          .percentage:hover {
            background-color: #fe3638;
          }

          .description::-webkit-scrollbar-thumb {
            background-color: darkgrey;
            outline: 1px solid slategrey;
            border: 0px !important;
          }
        `}
      </style>
    </Modal>
  );
}
