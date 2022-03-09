import Link from "next/link";
import Image from "next/image";

interface Props {
  className: string;
}

export default function Logo({ className }) {
  return (
    <Link href="/" passHref>
      <a className={`${className} xl:w-1/6 lg:w-1/4`}>
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
