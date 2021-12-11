import React from "react";
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div id="page-header" className="ph-full ph-cap-sm ph-image-cropped ph-image-cover-2 ph-content-parallax">
            <div className="page-header-inner tb-wrap">
            {/* Begin page header image 
            ============================= */}
            {/*<div className="ph-image">
                <div className="ph-image-inner">
                <Image src="assets/img/page-header/ph-6.jpg" alt="Image" />
                </div>
            </div>*/}
            {/* End page header image */}
            {/* Begin page header caption
            =============================== 
            */}
            <div className="ph-caption max-width-1000">
                <h1 className="ph-caption-title ph-appear font-normal"><em>Greetings!</em><br /> We provide an open-ended forum for <u><em>scholarly discussions</em></u> of legal and socio-political issues of importance.</h1>
                <div className="ph-caption-title-ghost ph-appear">Greetings!</div>
            </div> 
            {/* End page header caption */}
            </div> {/* /.page-header-inner */}
            {/* Begin scroll down circle
                        ============================== */}
            <a href="#page-content" className="scroll-down-circle" data-offset={30}>
            <div className="sdc-inner ph-appear">
                <div className="sdc-icon"><i className="fas fa-chevron-down" /></div>
                <svg viewBox="0 0 500 500">
                <defs>
                    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle" />
                </defs>
                <text dy={30}>
                    <textPath xlinkHref="#textcircle">Scroll down - Scroll down -</textPath>
                </text>
                </svg>
            </div> {/* /.sdc-inner */}
            </a>
            {/* End scroll down circle */}
        </div>
    );
};

export default HeroSection;
