import React from 'react';
import moment from 'moment';
import Image from 'next/image'


const HeaderSection = ( {data} ) => {
    const date = moment(data.createdAt).format('DD MMM, YYYY');
    return (
      <div id="page-header" className="ph-cap-sm ph-center ph-bg-image ph-image-cover-5-5 ph-content-parallax">
        <div className="page-header-inner tb-wrap max-width-1200">
          {/* Begin page header image 
							============================= */}
          <div className="ph-image">
            <div className="ph-image-inner">
              <img src={data.cover_image.url} alt={data.cover_image.alternativeText} />
            </div>
          </div>
          {/* End page header image */}
          {/* Begin page header caption
							=============================== 
							Use class "max-width-*" to set caption max width if needed. For example "max-width-1000". More info about helper classes can be found in the file "helper.css".
							*/}
          <div className="ph-caption">
            <h2 className="ph-caption-title ph-appear">{data.title}</h2> {/* You can use <br class="hide-from-lg"> to break a text line if needed */}
            <div className="ph-meta ph-appear">
              <span className="ph-meta-published">{date}</span>
              <span className="ph-meta-posted-by">by: <a href={`https://thebaton.in/team/${data.author.public_id}`} title={`View all posts by ${data.author.name}`}>{data.author.name}</a></span>
            </div> {/* /.ph-meta */}
          </div> 
          {/* End page header caption */}
        </div> {/* /.page-header-inner */}
        {/* Begin page header share (share buttons are for design purposes only!) 
						============================= */}
        <div className="ph-share">
          <div className="ph-share-trigger ph-appear">
            <div className="ph-share-text">Share</div>
            <div className="ph-share-icon magnetic-item"><i className="fas fa-share-alt" /></div>
          </div> {/* /.ph-share-trigger */}
          <div className="ph-share-content">
            <div className="ph-share-close cursor-close"><div className="bg-noise" /></div>
            <div className="ph-share-inner">
              <h1 className="ph-share-title ph-share-appear">Spread the Word!</h1>
              <div className="ph-share-subtitle ph-share-appear">Share this article with your friends</div>
              <div className="social-buttons ph-share-appear">
              <ul>
                  <li><a href={`https://www.facebook.com/sharer.php?u=https://www.thebaton.in/blogposts/${data.public_id}`} className="magnetic-item" title="Share on Facebook"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href={`https://twitter.com/intent/tweet?url=https://www.thebaton.in/blogposts/${data.public_id}&text=Check%20out%20this%20article%20I%20just%20read`} className="magnetic-item" title="Share on Twitter"><i className="fab fa-twitter" /></a></li>
                  <li><a href={`https://www.linkedin.com/sharing/share-offsite/?url=https%253A%252F%252Fwww.thebaton.in%2Fblogposts%2F${data.public_id}`} className="magnetic-item" title="Share on LinkedIn"><i className="fab fa-linkedin" /></a></li>
                </ul>
              </div> {/* /.social-buttons */}
              {/* This close is for mobile devices */}
              <div className="ph-share-m-close ph-share-appear">Close <i className="fas fa-times" /></div>
            </div> {/* /.ph-share-inner */}
            <div className="ph-share-ghost ph-share-appear">Share</div>
          </div> {/* /.ph-share-content */}
        </div>
        {/* End page header share */}
        
      </div>
    );
}

export default HeaderSection;