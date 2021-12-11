import React from "react";
import parse from 'html-react-parser';
import Image from 'next/image'



const Post = ({ data }) => {
    return (
        <div>
        {/* =======================
						///// Begin tb-section /////
						============================ 
						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
						*/}
        <div className="tb-section padding-top-xlg-180 padding-left-sm-3-p padding-right-sm-3-p">
          <div className="tb-section-inner tb-wrap">
            <div className="tb-row">
              <div className="tb-col-lg-4 padding-right-md-5-p">
                {/* Begin tb-Heading 
										====================== 
										* Use class "tb-heading-xsm", "tb-heading-sm", "tb-heading-lg", "tb-heading-xlg" or "tb-heading-xxlg" to set caption size (no class = default size).
										* Use class "tb-heading-stroke" to enable stroke style.
										* Use class "tb-heading-center" to align tb-Heading to center.
										* Use prepared helper class "max-width-*" to add custom width if needed. Example: "max-width-800". More info about helper classes can be found in the file "helper.css".
										*/}
                <div className="tb-heading tb-heading-xsm margin-bottom-60 anim-fadeinup">
                  <h2 className="tb-heading-title">Abstract</h2>
                  {/* <h3 class="tb-heading-subtitle text-gray">Subtitle</h3> */}
                </div>
                {/* End tb-Heading */}
              </div> {/* /.tb-col */}
              <div className="tb-col-lg-8">
                <div className="anim-fadeinup text-gray">
                {data.abstract ? parse(data.abstract) : "No abstract"}
                </div>
              </div> {/* /.tb-col */}
            </div> {/* /.tb-row */}
          </div> {/* /.tb-section-inner */}
        </div>
        {/* End tb-section */}
        {/* =======================
						///// Begin tb-section /////
						============================ 
						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
						*/}
        <div className="tb-section">
          <div className="tb-section-inner">
            {/* Begin tb-image
								====================
								* Use class "tti-fixed-height" to enable image fixed height (no effect on small screens!).
								* Use class "anim-image-parallax" on <img> tag to enable parallax effect.
								* Use class "margin-bottom-*" to enable bottom margins. For example "margin-bottom-100". More info about helper classes can be found in the file "helper.css".
								*/}
            <div className="tb-image tti-fixed-height">
              <figure>
                <img className="anim-image-parallax tb-lazy" src={data.cover_image.url} data-src={data.cover_image.url} alt="image" />
                {data.cover_image_caption ?
                <figcaption>
                  {data.cover_image_caption}
                </figcaption>
                : null}
                </figure>
            </div> 
            {/* End tb-image */}
          </div> {/* /.tb-section-inner */}
        </div>
        {/* End tb-section */}
        {/* =======================
						///// Begin tb-section /////
						============================ 
						* You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
						*/}
        <div className="tb-section padding-left-sm-3-p padding-right-sm-3-p">
          <div className="tb-section-inner tb-wrap">
            <div className="tb-row">
              <div className="tb-col-lg-8">
                {/* Begin tb-Heading 
											====================== 
											* Use class "tb-heading-xsm", "tb-heading-sm", "tb-heading-lg", "tb-heading-xlg" or "tb-heading-xxlg" to set caption size (no class = default size).
											* Use class "tb-heading-stroke" to enable stroke style.
											* Use class "tb-heading-center" to align tb-Heading to center.
											* Use prepared helper class "max-width-*" to add custom width if needed. Example: "max-width-800". More info about helper classes can be found in the file "helper.css".
											*/}             
                {/* End tb-Heading */}
                <div className="text-gray">
                    {parse(data.contents)}
                </div>
              </div> {/* /.tb-col */}
              <div className="tb-col-lg-4">
              </div> {/* /.tb-col */}
            </div> {/* /.tb-row */}
          </div> {/* /.tb-section-inner */}
        </div>
        {/* End tb-section */}
      </div>
    );
};

export default Post;