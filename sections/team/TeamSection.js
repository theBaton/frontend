import React from "react";
import Link from "next/link";

const TeamSection = ({ data }) => {
    return (
        <div id="portfolio-grid" className="pgi-hover">
            <div className="tb-grid ttgr-layout-3 ttgr-gap-3">
                <div className="tb-grid-items-wrap isotope-items-wrap">
                    {data.map( ( item ) =>                        
                    <div key={item._id} className="tb-grid-item isotope-item">
                        <div className="ttgr-item-inner">
                            <div className="portfolio-grid-item">
                                <Link
                                    href={`/team/${item.public_id}`}
                                    className="pgi-image-wrap"
                                    data-cursor="View<br>Profile"
                                >
                                <a>
                                    <div className="pgi-image-holder">
                                        <div className="pgi-image-inner anim-zoomin">
                                            <figure className="pgi-image ttgr-height">
                                                <img
                                                    src={item.profile_picture.formats.thumbnail.url}
                                                    alt={item.profile_picture.alternativeText}
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </a>
                                </Link>
                                <div className="pgi-caption">
                                    <div className="pgi-caption-inner">
                                        <h2 className="pgi-title">
                                            <a href={`/users/${item.public_id}`}>{item.name}</a>
                                        </h2>
                                        <div className="pgi-categories-wrap">
                                            <div className="pgi-category">{item.position}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
