import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="footer px-20 pt-10">
      <div>
        <Image src={"/img/wht_icon.png"} width={50} height={50}></Image>
        <p>
          Subsuke
          <br />
          サブスクを管理する
        </p>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover" href="/privacy">Privacy policy</a>
      </div>
    </footer>
  );
};

export default Footer;
