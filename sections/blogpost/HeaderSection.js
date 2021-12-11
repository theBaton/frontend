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
              <Image src={data.cover_image.url} alt={data.cover_image.alternativeText} />
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
              <span className="ph-meta-posted-by">by: <a href={`https://thebaton.in/authors/${data.author.public_id}`} title={`View all posts by ${data.author.name}`}>{data.author.name}</a></span>
            </div> {/* /.ph-meta */}
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
                  <li><a href="#0" className="magnetic-item" title="Share on Facebook"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="#0" className="magnetic-item" title="Share on Twitter"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#0" className="magnetic-item" title="Share on Pinterest"><i className="fab fa-linkedin" /></a></li>
                  <li><a href="#0" className="magnetic-item" title="Share on Pinterest"><i className="fab fa-instagram" /></a></li>
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