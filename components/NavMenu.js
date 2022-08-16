import style from "../styles/Nav.module.css";
import Image from "next/image";

import Link from "next/link";

const NavMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image
            src="/logo.jpg"
            layout="intrinsic"
            // className="border"
            width={50}
            height={90}
            priority
            alt="test"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav  justify-content-center align-content-center col-12 col-lg-12"
            role="tablist"
          >
            <li
              className="nav-item text-center mt-2 mb-2 col "
              role="tab"
              aria-selected="false"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className="nav-item text-center mt-2 mb-2 col"
              role="tab"
              aria-selected="false"
            >
              <Link href="/technology">Technology</Link>
            </li>
            <li
              className="nav-item text-center mt-2 mb-2 col"
              role="tab"
              aria-selected="false"
            >
              <Link href="/business">Business</Link>
            </li>
            <li
              className="nav-item text-center mt-2 mb-2 col"
              role="tab"
              aria-selected="false"
            >
              <Link href="/national">National</Link>
            </li>
            <li
              className="nav-item text-center mt-2 mb-2 col"
              role="tab"
              aria-selected="false"
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className="nav-item text-center mt-2 mb-2 col"
              role="tab"
              aria-selected="false"
            >
              <Link href="/contact">Contact</Link>
            </li>
            <li
              className="nav-item text-center mt-2 mb-2 col"
              role="tab"
              aria-selected="false"
            >
              <a className={style.dropdown + " position-relative"}>
                Category{" "}
                <i className="fa-solid fa-angle-right categoryDropdown"></i>
                <div className={style.navCategory}>
                  <ul className={style.ulDropdown + " text-dark"}>
                    <li
                      className={
                        style.liDropdown + " nav-item text-center mt-2 mb-2 col"
                      }
                      role="tab"
                      aria-selected="false"
                    >
                      Food
                    </li>
                    <li
                      className={
                        style.liDropdown + " nav-item text-center mt-2 mb-2 col"
                      }
                      role="tab"
                      aria-selected="false"
                    >
                      Politics
                    </li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
