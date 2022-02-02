import React from 'react';
import moment from 'moment';

const HeaderSection = ( {data} ) => {
    const date = moment(data.createdAt).format('DD MMM, YYYY');
    return (
        <div id="page-header" className="ph-full">
        <div className="page-header-inner tb-wrap">
          <div className="ph-caption">
            <div className="ph-categories ph-appear">
              <div className="ph-category text-gray" style={{}}>{data.sub_title}</div>
            </div> {/* /.ph-categories */}
            <h2 className="ph-caption-title ph-appear">{data.title}</h2> {/* You can use <br class="hide-from-lg"> to break a text line if needed */}
          </div> 
          <div className="project-info-list anim-fadeinup margin-top-60">
            <ul>
              <li>
                <div className="pi-list-heading">Author</div>
                <div className="pi-list-cont"><a href={`https://thebaton.in/team/${data.author.public_id}`}>{data.author.name}</a></div>
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
                  <li><a href={`https://www.facebook.com/sharer.php?u=https://www.thebaton.in/editorials/${data.public_id}`} className="magnetic-item" title="Share on Facebook"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href={`https://twitter.com/intent/tweet?url=https://www.thebaton.in/editorials/${data.public_id}&text=Check%20out%20this%20article%20I%20just%20read`} className="magnetic-item" title="Share on Twitter"><i className="fab fa-twitter" /></a></li>
                  <li><a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.thebaton.in/editorials/${data.public_id}`} className="magnetic-item" title="Share on LinkedIn"><i className="fab fa-linkedin" /></a></li>
                </ul>
              </div> {/* /.social-buttons */}
              {/* This close is for mobile devices */}
              <div className="ph-share-m-close ph-share-appear">Close <i className="fas fa-times" /></div>
            </div> {/* /.ph-share-inner */}
            <div className="ph-share-ghost ph-share-appear">Share</div>
          </div> {/* /.ph-share-content */}
        </div>
      </div>
    );
}

export default HeaderSection;