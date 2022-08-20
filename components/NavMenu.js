import style from "../styles/Nav.module.css";
import Image from "next/image";

import Link from "next/link";

const NavMenu = () => {
  return (
    // <nav className="navbar navbar-expand-lg bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       <Image
    //         src="/logo.jpg"
    //         layout="intrinsic"
    //         // className="border"
    //         width={50}
    //         height={90}
    //         priority
    //         alt="test"
    //       />
    //     </a>
    //     {/* <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button> */}
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul
    //         className="navbar-nav  justify-content-center align-content-center col-12 col-lg-12"
    //         role="tablist"
    //       >
    //         <li
    //           className="nav-item text-center mt-2 mb-2 col "
    //           role="tab"
    //           aria-selected="false"
    //         >
    //           <Link href="/">Home</Link>
    //         </li>
    //         <li
    //           className="nav-item text-center mt-2 mb-2 col"
    //           role="tab"
    //           aria-selected="false"
    //         >
    //           <Link href="/technology">Technology</Link>
    //         </li>
    //         <li
    //           className="nav-item text-center mt-2 mb-2 col"
    //           role="tab"
    //           aria-selected="false"
    //         >
    //           <Link href="/business">Business</Link>
    //         </li>
    //         <li
    //           className="nav-item text-center mt-2 mb-2 col"
    //           role="tab"
    //           aria-selected="false"
    //         >
    //           <Link href="/national">National</Link>
    //         </li>
    //         <li
    //           className="nav-item text-center mt-2 mb-2 col"
    //           role="tab"
    //           aria-selected="false"
    //         >
    //           <Link href="/about">About</Link>
    //         </li>
    //         <li
    //           className="nav-item text-center mt-2 mb-2 col"
    //           role="tab"
    //           aria-selected="false"
    //         >
    //           <Link href="/contact">Contact</Link>
    //         </li>
    //         <li
    //           className="nav-item text-center mt-2 mb-2 col"
    //           role="tab"
    //           aria-selected="false"
    //         >
    //           <a className={style.dropdown + " position-relative"}>
    //             Category{" "}
    //             <i className="fa-solid fa-angle-right categoryDropdown"></i>
    //             <div className={style.navCategory}>
    //               <ul className={style.ulDropdown + " text-dark"}>
    //                 <li
    //                   className={
    //                     style.liDropdown + " nav-item text-center mt-2 mb-2 col"
    //                   }
    //                   role="tab"
    //                   aria-selected="false"
    //                 >
    //                   Food
    //                 </li>
    //                 <li
    //                   className={
    //                     style.liDropdown + " nav-item text-center mt-2 mb-2 col"
    //                   }
    //                   role="tab"
    //                   aria-selected="false"
    //                 >
    //                   Politics
    //                 </li>
    //               </ul>
    //             </div>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
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
        {/* <img src="./RH_logo300x300.png" /> */}
        <ul className={style.ulContainer}>
          <li
            className="nav-item mt-5 mb-5 col"
            role="tab"
            aria-selected="false"
          >
            <Link href="/">
              <a className="d-lg-flex d-block align-items-center">
                <i className="fa-solid fa-house fa-lg ms-2 me-2 "></i>
                <b className=" d-lg-block d-none">Home</b>
              </a>
            </Link>
          </li>
          <li
            className="nav-item mt-5 mb-5 col"
            role="tab"
            aria-selected="false"
          >
            <Link href="/technology">
              <a className="d-lg-flex d-block justify-content-center align-items-center">
                <i className="fa-solid fa-display fa-lg ms-2 me-2 "></i>
                <b className=" d-lg-block d-none">Technology</b>
              </a>
            </Link>
          </li>
          <li
            className="nav-item mt-5 mb-5 col"
            role="tab"
            aria-selected="false"
          >
            <Link href="/business">
              <a className="d-lg-flex d-block align-items-center">
                <i className="fa-solid fa-briefcase fa-lg ms-2 me-2 "></i>
                <b className=" d-lg-block d-none">Business</b>
              </a>
            </Link>
          </li>
          <li
            className="nav-item mt-5 mb-5 col"
            role="tab"
            aria-selected="false"
          >
            <Link href="/national">
              <a className="d-lg-flex d-block align-items-center">
                <i className="fa-solid fa-landmark fa-lg ms-2 me-2 "></i>
                <b className=" d-lg-block d-none">National</b>
              </a>
            </Link>
          </li>
          <li
            className="nav-item mt-5 mb-5 col"
            role="tab"
            aria-selected="false"
          >
            <Link href="/about">
              <a className="d-lg-flex d-block align-items-center">
                <i className="fa-solid fa-exclamation fa-lg ms-2 me-2 "></i>
                <b className=" d-lg-block d-none">About</b>
              </a>
            </Link>
          </li>
          <li
            className="nav-item mt-5 mb-5 col"
            role="tab"
            aria-selected="false"
          >
            <Link href="/contact">
              <a className="d-lg-flex d-block align-items-center">
                <i className="fa-solid fa-phone fa-lg ms-2 me-2 "></i>
                <b className=" d-lg-block d-none">Contact</b>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
