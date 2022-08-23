import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Marquee from "./Highlights";

import NavMenu from "./NavMenu";

const Layout = ({ children }) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="col-2 bg-grey">
        <NavMenu />
      </div>
      <div className="col-10 container-fluid">
        <div className="d-flex justify-content-center mt-5 mb-5">
          <h1 className="d-inline bg-danger text-light p-2 display-1 font-weight-bold">
            रङ्गे
          </h1>
          <h1 className="d-inline bg-dark text-light p-2 display-1">हात</h1>
        </div>
        <Marquee />
        <main className={styles.container}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
