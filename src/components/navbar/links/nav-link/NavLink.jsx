"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link
      className={`${
        pathname === item.path ? "bg-neutral-600 text-white" : ""
      } px-4 py-2 rounded-full`}
      href={item.path}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
