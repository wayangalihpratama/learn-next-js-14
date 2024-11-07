import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="h-24 flex justify-between items-center">
      <div className="text-xl font-bold">Logo</div>
      <Links />
    </div>
  );
};

export default Navbar;
