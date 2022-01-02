import React from "react";
import Link from "next/link";

const UserWorksSection = ({ data }) => {
  return (
    <div id="portfolio-grid" className="pgi-hover">
      <div className="tb-grid ttgr-layout-3 ttgr-gap-3">
        <div className="tb-grid-items-wrap isotope-items-wrap">
          {data.map((item) => (
            <div key={item._id} className="tb-grid-item isotope-item">
              <div className="ttgr-item-inner">
                <div className="portfolio-grid-item">
                  {item.abstract ? (
                    <Link
                      href={`/editorial/${item.public_id}`}
                      className="pgi-image-wrap"
                      data-cursor="Read<br>Editorial"
                    >
                      <a>
                        <div className="pgi-image-holder">
                          <div className="pgi-image-inner anim-zoomin">
                            <figure className="pgi-image ttgr-height">
                              <img
                                src={item.cover_image.formats.small.url}
                                alt={item.cover_image.alternativeText}
                              />
                            </figure>
                          </div>
                        </div>
                      </a>
                    </Link>
                  ) : (
                    <Link
                      href={`/blogpost/${item.public_id}`}
                      className="pgi-image-wrap"
                      data-cursor="Read<br>Blogpost"
                    >
                      <a>
                        <div className="pgi-image-holder">
                          <div className="pgi-image-inner anim-zoomin">
                            <figure className="pgi-image ttgr-height">
                              <img
                                src={item.cover_image.formats.small.url}
                                alt={item.cover_image.alternativeText}
                              />
                            </figure>
                          </div>
                        </div>
                      </a>
                    </Link>
                  )}

                  <div className="pgi-caption">
                    <div className="pgi-caption-inner">
                      <h2 className="pgi-title">
                          {item.abstract ? (
                        <a href={`/editorial/${item.public_id}`}>{item.title}</a>
                        ) : (
                        <a href={`/blogpost/${item.public_id}`}>{item.title}</a>
                        )}
                      </h2>
                      <div className="pgi-categories-wrap">
                        <div className="pgi-category">{item.cta_title ? item.cta_title : item.sub_title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserWorksSection;
