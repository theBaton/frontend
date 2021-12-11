import React from "react";
import Link from "next/link";
import Image from 'next/image'


const HeaderSection = () => {
    return (
        <div id="page-header" className="ph-full ph-cap-xxlg ph-center ph-image-cropped ph-image-cover-2 ph-content-parallax">
        <div className="page-header-inner tb-wrap">
          {/* Begin page header image 
							============================= */}
          {/* <div className="ph-image">
            <div className="ph-image-inner">
              <img src="" alt="" />
            </div>
          </div> */}
          {/* End page header image */}
          {/* Begin page header caption
							=============================== 
							Use class "max-width-*" to set caption max width if needed. For example "max-width-1000". More info about helper classes can be found in the file "helper.css".
							*/}
          <div className="ph-caption">
            <h1 className="ph-caption-title ph-appear">Blogposts</h1>
            <div className="ph-caption-title-ghost ph-appear">Blogposts</div>
            {/* <div className="ph-caption-subtitle ph-appear">Selected Works</div> */}
          </div> 
          {/* End page header caption */}
        </div> {/* /.page-header-inner */}
        {/* Begin scroll down circle (you can change "data-offset" to set scroll top offset) 
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

export default HeaderSection;