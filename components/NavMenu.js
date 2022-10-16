import style from "../styles/Nav.module.css";
import Image from "next/image";

import Link from "next/link";

const NavMenu = () => {
  return (
    <nav className={style.navContainer + " bg-light"}>
      <div className="text-center">
        <Image
          src="/RH_logo300x300.png"
          layout="responsive"
          // className="border"
          width={400}
          height={400}
          priority
          alt="test"
        />
        <h6 className="text-dark">Rangehaat</h6>
        <ul className={style.ulContainer}>
          <li
            className="nav-item mt-3 mb-3 col text-dark"
            role="tab"
            aria-selected="false"
          >
            <Link href="/" title="home">
              <a className="d-lg-flex d-block align-items-center">
                <i className="fa-solid fa-house fa-lg ms-2 me-2 "></i>
                <b className=" d-block">Home</b>
              </a>
            </Link>
          </li>
          <li
            className="nav-item mt-3 mb-3 col text-dark"
            role="tab"
            aria-selected="false"
          >
            <Link href="/national" title="national">
              <a className="d-lg-flex d-block align-items-center">
                <i className="fa-solid fa-landmark fa-lg ms-2 me-2 "></i>
                <b className=" d-block">National</b>
              </a>
            </Link>
          </li>
          <li
            className="nav-item mt-3 mb-3 col text-dark"
            role="tab"
            aria-selected="false"
          >
            <Link href="/business" title="business">
              <a className="d-lg-flex d-block align-items-center">
                <i className="fa-solid fa-briefcase fa-lg ms-2 me-2 "></i>
                <b className=" d-block">Business</b>
              </a>
            </Link>
          </li>
          <li
            className="nav-item mt-3 mb-3 col text-dark"
            role="tab"
            aria-selected="false"
          >
            <Link href="/international" title="international">
              <a className="d-lg-flex d-block align-items-center">
                <i className="fa-solid fa-earth-africa fa-lg ms-2 me-2 "></i>
                <b className=" d-block">International</b>
              </a>
            </Link>
          </li>
          <li
            className="nav-item mt-3 mb-3 col text-dark"
            role="tab"
            aria-selected="false"
          >
            <Link href="/technology" title="technology">
              <a className="d-lg-flex d-block align-items-center">
                <i className="fa-solid fa-display fa-lg ms-2 me-2 "></i>
                <b className=" d-block">Technology</b>
              </a>
            </Link>
          </li>
          <li
            className="nav-item mt-3 mb-3 col text-dark"
            role="tab"
            aria-selected="false"
          >
            <Link href="/nature" title="nature">
              <a className="d-lg-flex d-block align-items-center">
                <i className="fa-solid fa-leaf fa-lg ms-2 me-2 "></i>
                <b className=" d-block">Nature</b>
              </a>
            </Link>
          </li>
          <li
            className="nav-item mt-3 mb-3 col text-dark"
            role="tab"
            aria-selected="false"
          >
            <Link href="/notice" title="notice">
              <a className="d-lg-flex d-block align-items-center">
                <i className="fa-solid fa-note-sticky fa-lg ms-2 me-2 "></i>
                <b className=" d-block">Notice</b>
              </a>
            </Link>
          </li>
          <li
            className="nav-item mt-3 mb-3 col text-dark"
            role="tab"
            aria-selected="false"
          >
            <Link href="/others" title="others">
              <a className="d-lg-flex d-block align-items-center">
                <i className="fa-solid fa-infinity fa-lg ms-2 me-2 "></i>
                <b className=" d-block">Others</b>
              </a>
            </Link>
          </li>
          <li
            className="nav-item mt-3 mb-3 col text-dark"
            role="tab"
            aria-selected="false"
          >
            <Link href="/about" title="about">
              <a className="d-lg-flex d-block align-items-center">
                <i className="fa-solid fa-exclamation fa-lg ms-2 me-2 "></i>
                <b className=" d-block">About</b>
              </a>
            </Link>
          </li>
          <li
            className="nav-item mt-3 mb-3 col text-dark"
            role="tab"
            aria-selected="false"
          >
            <Link href="/contact" title="contact">
              <a className="d-lg-flex d-block align-items-center">
                <i className="fa-solid fa-phone fa-lg ms-2 me-2 "></i>
                <b className=" d-block">Contact</b>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
