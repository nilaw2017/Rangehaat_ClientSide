import Image from "next/image";
import Style from "./../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className="border">
      <section className=" d-flex align-items-center">
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
            <h4>अध्यक्ष/संचालक :</h4>
            <h5>पुनम पौडेल(२६२१३९)</h5>
          </div>
          <div className="d-flex align-items-center">
            <h4>प्राविधिक प्रमुख : </h4>
            <h5>नील मानन्धर</h5>
          </div>
          <div className="d-flex align-items-center">
            <h4>प्रधान सम्पादक :</h4>
            <h5>किरण पौडेल</h5>
          </div>
          <p>कलंकी, काठमाडौं</p>
        </section>
      </section>
      <center>
        Developed By: <b>Nilaw Manandhar</b>
      </center>
    </footer>
  );
};

export default Footer;
