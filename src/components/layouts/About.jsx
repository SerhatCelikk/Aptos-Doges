import { React, useState } from "react";
import { Link } from "react-router-dom";


import item from "../../assets/fake-data/item";

const About = () => {
  const [data] = useState({
    subtitle: "About Us",
    title: "High Quality NFT  Collections",
    desc1:
      "The goal of Aptos Doges is to create a community of like-minded people interested in the Aptos ecosystem. A place where we can share information, lessons and ideas. We really want to solidify our community is one of the OGs of Aptos. A community that newcomers as well as veteran investors can look up to.",
    desc2:
      "",
  });

  return (
    <section    className="tf-section section-about mt--0 pb-100">
      <div id="about"className="container mt--0">
        <div className="row reverse">
          <div  className="col-xl-7 col-md-12 mt-107">
            <div  className="group-image ">
              <div className="left">
                <div className="item ">
                  <img  src={item.item22} alt="Monteno" />
                </div>
              </div>
              <div className="right">
                <div className="item ">
                  <img  src={item.item23} alt="Monteno" />
                </div>
                <div className="item b">
                  <img  src={item.item24} alt="Monteno" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-md-12">
            <div className="block-text pt-12">
              <h5

                className="sub-title mt-107"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.subtitle}
              </h5>
              <h3
                className=""
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.title}
              </h3>
              <p
                className=""
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.desc1}
              </p>
              <p
                className="fs-18 line-h17 mb-41"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.desc2}
              </p>
              <Link
                to="/mint"
                className="btn-action style-2"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Mint Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
