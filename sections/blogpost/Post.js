import React from "react";
import parse from 'html-react-parser';


const Post = ({ data }) => {
    return (
      <div className="tb-section">
			  <div className="tb-section-inner tb-wrap max-width-900">
          <article className="tb-blog-post lightgallery">

            <div className="tb-blog-post-content">
              {parse(data.contents)}
              {/* Begin tb-Embed (Vimeo video) */}
              {/* <div class="tb-embed hide-cursor">
                          <iframe class="tb-embed-item" data-src="https://player.vimeo.com/video/1321231123123" allowfullscreen=""></iframe>
                  </div> */}
              {/* End tb-Embed */}
            </div>
                  
            <div className="tb-blog-post-share bss-fixed-bottom">
              <div className="tb-bps-text">Share:</div>
              <div className="social-buttons">
                <ul>
                  <li><a href="#0" className="magnetic-item" title="Share on Facebook"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="#0" className="magnetic-item" title="Share on Twitter"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#0" className="magnetic-item" title="Share on Pinterest"><i className="fab fa-linkedin" /></a></li>
                  <li><a href="#0" className="magnetic-item" title="Share on Pinterest"><i className="fab fa-instagram" /></a></li>
                </ul>
              </div> {/* /.social-buttons */}
            </div>
            {/* End blog post share */}
          </article>
      </div>
    </div>
    );
};

export default Post;