import React from 'react';
import Link from 'next/link';


const BlogpostSection = ( { data } ) => {
    return (
        <div id="portfolio-grid" className="pgi-cap-inside pgi-cap-hover">
        <div className="tb-grid ttgr-layout-creative-1 ttgr-gap-6">
          <div className="tb-grid-items-wrap isotope-items-wrap">
            {data.map( ( item ) =>
            <div key={item._id} className="tb-grid-item isotope-item">
              <div className="ttgr-item-inner">``
                <div className="portfolio-grid-item">
                  <Link href={`/blogposts/${item.public_id}`} className="pgi-image-wrap" data-cursor="View<br>Project">
                    <a>
                      <div className="pgi-image-holder cover-opacity-2">
                      <div className="pgi-image-inner anim-zoomin">
                        <figure className="pgi-image ttgr-height">
                          <img src={item.cover_image.formats.small.url} alt={item.cover_image.alternativeText} />
                        </figure> {/* /.pgi-image */}
                      </div> {/* /.pgi-image-inner */}
                    </div> {/* /.pgi-image-holder */}
                  </a></Link> {/* /.pgi-image-wrap */}
                  <div className="pgi-caption">
                    <div className="pgi-caption-inner">
                      <h2 className="pgi-title text-white">{item.title}</h2>
                      <div className="pgi-categories-wrap">
                        <div className="pgi-category text-white">{item.cta_title}</div>
                      </div> {/* /.pli-categories-wrap */}
                    </div> {/* /.pgi-caption-inner */}
                  </div> {/* /.pgi-caption */}
                </div>
              </div> {/* /.ttgr-item-inner */}
            </div>
            )}
            {/* End tb-Grid item */}
          </div>
          {/* End tb-Grid items wrap  */}
        </div>
        {/* End tb-Grid */}
      </div>
    )
};

export default BlogpostSection;