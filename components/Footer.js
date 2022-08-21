import Image from "next/image";
import Style from "./../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className="border d-flex align-items-center">
      <div className={Style.logoImage}>
        <Image
          src="/favicons/android-chrome-512x512.png"
          layout="responsive"
          width={200}
          height={200}
        />
      </div>
      <section>
        <div className="d-flex align-items-center">
          <h4>Chairman:</h4>
          <h5>Nilaw Manandhar</h5>
        </div>
        <div className="d-flex align-items-center">
          <h4>Editor-In-Chief:</h4>
          <h5>Kiran Paudel</h5>
        </div>
        <p>KALANKI, KATHMANDU</p>
      </section>
    </footer>
  );
};

export default Footer;
