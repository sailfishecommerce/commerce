import Link from "next/link";

export default function BlogBanner() {
  return (
    <section className="w-full items-center justify-center">
      <div className="flex justify-between">
        <Link href="/blog" passHref>
          <a className="w-1/2 bg-pink-300 hover:bg-pink-200 flex justify-center p-8 items-center  md:p-16">
            <div className="content">
              <h3 className="capitalize text-lg font-bold">Read the Blog</h3>
              <p>Latest store, Fashion news and trends</p>
            </div>
          </a>
        </Link>
        <Link href="/contact-us" passHref>
          <a className="w-1/2 bg-purple-300 hover:bg-purple-200 flex justify-center  p-8 items-center md:p-16">
            <div className="content">
              <h3 className="capitalize font-bold text-lg">Read the Blog</h3>
              <p>Latest store, Fashion news and trends</p>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
}
