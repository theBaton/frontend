import React from 'react';
import moment from 'moment';

const HeaderSection = ( {data} ) => {
    const date = moment(data.createdAt).format('DD MMM, YYYY');
    return (
        <div id="page-header" className="ph-full">
        <div className="page-header-inner tb-wrap">
          {/* Begin page header caption
							=============================== 
							Use class "max-width-*" to set caption max width if needed. For example "max-width-1000". More info about helper classes can be found in the file "helper.css".
							*/}
          <div className="ph-caption">
            <div className="ph-categories ph-appear">
              <div className="ph-category" style={{}}>{data.sub_title}</div>
              {/* <div class="ph-category">Varia</div> */}
            </div> {/* /.ph-categories */}
            <h2 className="ph-caption-title ph-appear">{data.title}</h2> {/* You can use <br class="hide-from-lg"> to break a text line if needed */}
            {/* <h4 class="ph-caption-subtitle ph-appear">Subtitle</h4> */}
          </div> 
          {/* End page header caption */}
          {/* Begin project info list
							============================= 
							* You can use the project info list as a standalone element outside of the page header if you want.
							*/}
          <div className="project-info-list anim-fadeinup margin-top-60">
            <ul>
              <li>
                <div className="pi-list-heading">Author</div>
                <div className="pi-list-cont">{data.author.name}</div>
              </li>
              <li>
                <div className="pi-list-heading">Date Published</div>
                <div className="pi-list-cont">{date}</div>
              </li>
              {data.keywords.length != 0 ?
              <li>
                <div className="pi-list-heading">Keywords</div>                
                    {data.keywords.map((keyword, index) => {
                        return (
                            <div className="pi-list-cont"key={index}>{keyword}</div>
                        )
                    })}
              </li>
                : null}
            </ul>
          </div>
          {/* End project info list */}
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
              <div className="ph-share-subtitle ph-share-appear">Share this project with your friends</div>
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