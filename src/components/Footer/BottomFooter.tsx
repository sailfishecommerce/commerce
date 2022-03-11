import {
  FooterBottomFeatures,
  FooterBottomSocials,
  FooterBottomWidgets,
} from "@/components/Footer/FooterBottomElement";

export default function BottomFooter() {
  return (
    <div className="w-full bg-gray-800 py-6 px-6">
      <div className="container flex  flex-col m-auto justify-center">
        <FooterBottomFeatures />
        <hr className="hr-light mb-5" />
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <FooterBottomWidgets />
          <FooterBottomSocials />
        </div>
        <div className="pb-4 text-gray-400 text-center lg:text-left text-xs">
          © All rights reserved. Made by{" "}
          <a
            aria-label="Bandicoot Studios"
            className="text-red-500"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Bandicoot Studio
          </a>
        </div>
      </div>
    </div>
  );
}
