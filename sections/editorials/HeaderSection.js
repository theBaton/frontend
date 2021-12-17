import React from "react";
import Link from 'next/link';
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
            <h1 className="ph-caption-title ph-appear">Editorials</h1>
            <div className="ph-caption-title-ghost ph-appear">Editorials</div>
            {/* <div className="ph-caption-subtitle ph-appear">Selected Works</div> */}
          </div> 
          {/* End page header caption */}
        </div> {/* /.page-header-inner */}
      </div>
    );
};

export default HeaderSection;