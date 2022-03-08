import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <a className="xl:w-1/6 w-1/2 lg:w-1/4">
        <Image
          src="/logo.webp"
          alt="Bandicoot"
          height={70}
          width={200}
          layout="responsive"
          priority={true}
        />
      </a>
    </Link>
  );
}
