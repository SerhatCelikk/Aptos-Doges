import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

import logo from "../../assets/fake-data/logo";
import whitelogo from "../../assets/fake-data/whitelogo";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row" >
            <div className="footer__body">
              <Link  clasName="link"to="/">
                <img className="img" id="Animals" src={logo} alt="Apto Doges" data-aos="fade-down" style={{width:"30%"}} />
              </Link>

             {/* <p className="desc fs-18" data-aos="fade-up">
                Apto Doges NFTs are a collection of 1111 unique, randomly generated, and
                beautifully illustrated NFTs on the Aptos ecosystem. Each NFT is a
                collectible, and each one is a unique piece of art.
  </p> */}
              <ul className="social" >
                
                <li>
                 <a href="https://twitter.com/AptoDoges" target="_blank">
                    <i className="fab fa-twitter" ></i>
                  </a>
                </li>
                
              </ul>
            </div>
            {/* <div className="footer_bottom"> */}
            {/* <p className="fs-16">Copyright © 2022, Monteno - NFT Portfolio ReactJS Template. Designed by <Link to="https://themeforest.net/user/themesflat/portfolio">Themesflat</Link></p> */}
            {/* <ul>
                            <li><Link to="#">Terms & Condition</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Cookie Policy</Link></li>
                        </ul>
                    </div> */}
          </div>
        </div>
      </footer>
      {isVisible && <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>}
    </>
  );
};

export default Footer;
