"use client";

import "./links.css";
import { useState } from "react";
import NavLink from "./nav-link/NavLink";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];
const session = true;
const isAdmin = true;

const Links = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="links flex items-center space-x-10">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="px-4 py-2 bg-amber-600 rounded-md text-white">
              Logout
            </button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      {/* mobile nav */}
      <button
        className="mobile-menu-button"
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className="mobile-nav-links">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
      {/* eol mobile nav */}
    </div>
  );
};

export default Links;
