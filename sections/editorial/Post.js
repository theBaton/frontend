import React from "react";
import parse from 'html-react-parser';

const Post = ({ data }) => {
    return (
        <div>
        {data.abstract ?
        <div className="tb-section padding-top-xlg-180 padding-left-sm-3-p padding-right-sm-3-p">
          <div className="tb-section-inner tb-wrap">
            <div className="tb-row">
              <div className="tb-col-lg-4 padding-right-md-5-p">
                <div className="tb-heading tb-heading-xsm margin-bottom-60 anim-fadeinup">
                  <h2 className="tb-heading-title">Abstract</h2>
                </div>
              </div> {/* /.tb-col */}
              <div className="tb-col-lg-8">
                <div className="anim-fadeinup text-gray">
                {parse(data.abstract)} 
                </div>
              </div> {/* /.tb-col */}
            </div> {/* /.tb-row */}
          </div> {/* /.tb-section-inner */}
        </div>
        : null}
        <div className="tb-section">
          <div className="tb-section-inner">
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
          </div> {/* /.tb-section-inner */}
        </div>
        <div className="tb-section padding-left-sm-3-p padding-right-sm-3-p">
          <div className="tb-section-inner tb-wrap">
            <div className="tb-row">
              <div className="tb-col-lg-8">             
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
      </div>
    );
};

export default Post;