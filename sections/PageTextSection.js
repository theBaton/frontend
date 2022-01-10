import React from "react";

const PageTextSection = ({ data }) => {
    return (
      <div className="tb-section">
			  <div className="tb-section-inner tb-wrap max-width-900">
          <article className="tb-blog-post lightgallery">

            <div className="tb-blog-post-content">
              {data}
            </div>
          </article>
      </div>
    </div>
    );
};

export default PageTextSection;