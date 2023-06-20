import React, { useState, lazy } from "react";
import Logo from "../images/white_logo.png";
const HeaderLinks = lazy(() => import("./HeaderLinks"));

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuSettings = (e) => {
    const MENU = document.getElementById("menu");
    if (menuOpen) {
      MENU.classList.remove("right-0");
      MENU.classList.add("-right-80");
      setMenuOpen(false);
      e.target.innerHTML = "menu";
    } else {
      MENU.classList.remove("-right-80");
      MENU.classList.add("right-0");
      setMenuOpen(true);
      e.target.innerHTML = "close";
    }
  };
  return (
    <React.Fragment>
      <div className="flex w-screen justify-between bg-indigo-950 py-2">
        <a href="/">
          <img src={Logo} alt="logo" className="z-50 ms-4 w-24" />
        </a>

        {/* menu button */}
        <button
          onClick={(e) => menuSettings(e)}
          className={`z-50 ${menuOpen ? "fixed top-5" : "relative"} right-0`}
        >
          <span className="material-symbols-outlined me-5 text-white md:hidden">
            menu
          </span>
        </button>

        {/* header link area */}
        <div
          id="menu"
          className="fixed -right-80 top-0 z-40 flex h-screen flex-col items-center bg-slate-700 pe-4 ps-3 pt-10 duration-300 md:relative md:right-0 md:h-auto md:flex-row md:bg-transparent md:pt-0"
        >
          <HeaderLinks link={"/about"} text={"About"} />
          <HeaderLinks link={"#benefits"} text={"Benefits"} />
          <HeaderLinks link={"/committees"} text={"Committees"} />
          <HeaderLinks link={"/gallery"} text={"Gallery"} />
          <a
            href="/register"
            className="ms-3 mt-5 rounded-md bg-orange-600 px-3 py-1 font-semibold text-white duration-300 ease-in hover:bg-teal-600 md:mt-1"
          >
            Register Now
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
