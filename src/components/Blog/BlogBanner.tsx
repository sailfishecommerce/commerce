import Link from "next/link";
import { FooterSocialIcons } from "@/components/Footer/FooterBottomElement";

export default function BlogBanner() {
  return (
    <section className="w-full items-center justify-center">
      <div className="flex justify-between">
        <Link href="/blog" passHref>
          <a className="w-1/2 bg-pink-300 hover:bg-pink-200 flex justify-center p-8 items-center  md:p-16">
            <div className="content">
              <h3 className="capitalize text-lg font-bold">Read our Blog</h3>
              <p>Latest news, Fashion news and trends</p>
            </div>
          </a>
        </Link>
        <Link href="/contact-us" passHref>
          <a className="w-1/2 bg-purple-300 hover:bg-purple-200 flex justify-center  p-8 items-center md:p-16">
            <div className="content">
              <h3 className="capitalize font-bold text-lg mb-1 ml-2">
                Contact us
              </h3>
              <FooterSocialIcons />
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
}
