import React from "react";
import Link from "next/link";

const TeamSection = ({ data }) => {
    return (
        <div id="portfolio-grid" className="pgi-hover">
            <div className="tb-grid ttgr-layout-3 ttgr-gap-3">
                <div className="tb-grid-items-wrap isotope-items-wrap">
                    {data.map( ( item ) =>                        
                    <div key={item._id} className="tb-grid-item isotope-item">
                        {(item.admin_user || item.public_id=="sarvagya-dwivedi") ?
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
                                                {item.profile_picture ?
                                                <img
                                                    src={item.profile_picture.url}
                                                    alt={item.profile_picture.alternativeText}
                                                /> :
                                                <img
                                                    src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                                                    alt="Team Member"
                                                />}
                                            </figure>
                                        </div>
                                    </div>
                                </a>
                                </Link>
                                <div className="pgi-caption">
                                    <div className="pgi-caption-inner">
                                        <h2 className="pgi-title">
                                            <a href={`/team/${item.public_id}`}>{item.name}</a>
                                        </h2>
                                        <div className="pgi-categories-wrap">
                                            <div className="pgi-category">{item.position_title}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        null}
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
