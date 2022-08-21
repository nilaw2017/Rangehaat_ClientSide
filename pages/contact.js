import Image from "next/image";
import Style from "./../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <h3>Contact Us</h3>
      <div className={Style.logoImage}>
        <Image
          src="/favicons/android-chrome-512x512.png"
          layout="responsive"
          width={512}
          height={512}
        />
        <div className="d-flex">
          <h5 className="text-danger">rangehaat</h5>
          <h5 className="text-primary">.com</h5>
        </div>
        <h5>Kalanki, Kathmandu</h5>
        <h5>981-3604129</h5>
        <br></br>
        <h4>Email:</h4>
        <h5>rangehaatmedia@gmail.com</h5>
      </div>
    </>
  );
}
