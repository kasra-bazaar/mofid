import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import { getAbbr } from "utils/getAbbr";

export type AvatarProps = {
  src: string;
  name: string;
  size: number;
  className?: string;
};

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { name, src, size, className } = props;
console.log(props)
  const [loaded, setLoaded] = useState(false);

  return (
    <figure
      style={{ width: size, height: size }}
      className={clsx(
        className,
        !loaded && "bg-gray-100",
        "relative inline-flex items-center justify-center overflow-hidden rounded-full"
      )}
    >
      {!loaded && (
        <figcaption className="font-medium text-gray-600 dark:text-gray-300">
          {getAbbr(name)}
        </figcaption>
      )}
      <Image
        src={src}
        alt={name}
        width={size}
        height={size}
        onLoadingComplete={() => setLoaded(true)}
        className="absolute inset-0 h-full w-full"
      />
    </figure>
  );
};
