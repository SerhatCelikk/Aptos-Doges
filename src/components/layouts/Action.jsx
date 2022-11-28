import React, { useState } from "react";
import { Link } from "react-router-dom";

const Action = () => {
  const [data] = useState({
    title: "Apto Doges NFT",
    desc: "Get your NFT now!",
    desc2:
      "Aptos Doges NFTs are a collection of 1111 unique, randomly generated, and beautifully illustrated NFTs on the Aptos ecosystem. Each NFT is a collectible, and each one is a unique piece of art.",
  });

  return (
    <section className="tf-section action">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="action__body" data-aos="fade-up">
              <div className="block-text">
                <h3 className="mb-13">{data.title}</h3>
                <p className="fs-21 mb-7">{data.desc}</p>
                
              </div>
              <Link to="/mint" className="btn-action style-2">
                Mint Now
              </Link>
            </div>
            
            
          </div>
        </div>
      </div>
      <p className="fs-21 mb-7" style={{paddingLeft:"17%",paddingRight:"17%",paddingTop:"5%",color:"#403133",fontWeight:"bold"}}>{data.desc2}</p>
    </section>
  );
};

export default Action;
