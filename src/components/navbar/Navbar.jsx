import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="h-24 flex justify-between items-center px-20">
      <div className="font-bold text-2xl">
        <Link href="/">wgprtm_</Link>
      </div>
      <Links />
    </div>
  );
};

export default Navbar;
