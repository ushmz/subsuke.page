import React from "react";
import Icon from "./Icon";
// import daisyuiColors from "daisyui/src/colors/themes";

const Footer: React.FC = () => {
  return (
    <footer className="footer px-20 py-10">
      <div>
        <Icon height="44rem" width="44rem" />
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
        <a className="link link-hover" href="/privacy">
          Privacy policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
