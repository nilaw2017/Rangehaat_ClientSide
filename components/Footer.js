import Image from "next/image";
import Style from "./../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className="border">
      <section className="d-block d-lg-flex align-items-center justify-content-center">
        <div className={Style.logoImage}>
          <Image
            src="/favicons/android-chrome-512x512.png"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <div className="text-center text-lg-start">
          <h6>अध्यक्ष/संचालक :पुनम पौडेल(२६२१३९)</h6>
          <h6>प्राविधिक प्रमुख :नील मानन्धर</h6>
          <h6>प्रधान सम्पादक : किरण पौडेल</h6>
          <p>कलंकी, काठमाडौं</p>
        </div>
      </section>
      <h6 className="text-center">
        Developed By: <b>Nilaw Manandhar</b>
      </h6>
    </footer>
  );
};

export default Footer;
