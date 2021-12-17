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
                <img src="assets/img/page-header/ph-6.jpg" alt="Image" />
                </div>
            </div>*/}
            {/* End page header image */}
            {/* Begin page header caption
            =============================== 
            */}
            <div className="ph-caption max-width-1400">
                <h1 className="ph-caption-title ph-appear font-normal"><em>Greetings!</em><br /> We provide an open-ended forum for <u><em>scholarly discussions</em></u> of legal and socio-political issues of importance.</h1>
                <div className="ph-caption-title-ghost ph-appear">Greetings!</div>
            </div> 
            {/* End page header caption */}
            </div> {/* /.page-header-inner */}            
        </div>
    );
};

export default HeroSection;
