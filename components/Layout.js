import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Marquee from "./Highlights";
import Image from "next/image";
import NavMenu from "./NavMenu";

const Layout = ({ children }) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="col-2 bg-grey">
        <NavMenu />
      </div>
      <div className="col-10 container">
        <Marquee />
        <main className={styles.container}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
