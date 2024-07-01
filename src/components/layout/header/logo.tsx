import Image from "next/image";
import Link from "next/link";

import logoTypo from "../../../../public/images/logo-typo.png";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src={logoTypo} alt="emofid" className="h-7 w-auto contrast-150" />
    </Link>
  );
};
