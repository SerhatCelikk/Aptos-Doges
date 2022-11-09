import React , { useState } from 'react';
import { Link } from 'react-router-dom'

const Speciality = (props) => {

    const [datatext] = useState({
        subtitle: 'Our Speciality',
        title: 'What is the utility of the Aptos Doges NFT?',
        desc : 'We will never stop looking for ways to provide value to the people who believe in us.'
    })

    const data = props.data;

    return (
        <section className="tf-section section-speciality">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-12">
                        <div className="block-text pt-128 pd-0">
                            <h5 className="sub-title" data-aos="fade-up" data-aos-duration="1000">{datatext.subtitle}</h5>
                            <h3 className="" data-aos="fade-up" data-aos-duration="1000">{datatext.title}</h3>
                            <p className="" data-aos="fade-up" data-aos-duration="1000">{datatext.desc}</p>
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-12">
                        <div className="section-speciality__box">
                            {
                                data.map((data,index) => (
                                    <div key={index} className={`box-item bg-2 ${data.class}`} data-aos="flip-left">
                                        <h4 className='color-main'>{data.stt}</h4>
                                        <Link to="/collections" className="h5">{data.title}</Link>
                                        <p>{data.desc}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Speciality;