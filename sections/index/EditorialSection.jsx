import React from "react";
import Link from "next/link";
import Image from 'next/image'


const EditorialSection = ({ data }) => {
  return (
    <div className="tb-section no-padding-bottom">
        <div className="tb-section-inner">

          <div className="tb-heading tb-heading-lg tb-heading-center margin-bottom-10-p anim-fadeinup">
            <h3 className="tb-heading-subtitle text-gray">Featured</h3>
            <h2 className="tb-heading-title">Editorials</h2>
            <div className="tb-btn tb-btn-link margin-top-20">
              <Link href="/blogposts" data-hover="See All Editorials"><a>See All Editorials</a></Link>
            </div>
          </div>

          <div id="portfolio-grid" className="pgi-cap-inside pgi-hover">

            <div className="tb-grid ttgr-layout-creative-2 ttgr-not-cropped ttgr-gap-4">

              <div className="tb-grid-items-wrap isotope-items-wrap">
              
              {data.map( ( item ) => 
            <div key={item._id} className="tb-grid-item isotope-item">
                <div className="ttgr-item-inner">
                <div className="portfolio-grid-item">
                    <Link href={`/editorials/${item.public_id}`} className="pgi-image-wrap" data-cursor="View<br>Project">
                    <a>
                    <div className="pgi-image-holder cover-opacity-2">
                        <div className="pgi-image-inner anim-zoomin">
                        <figure className="pgi-image ttgr-height">
                            <img src={item.cover_image.url} alt={item.cover_image.alternativeText} />
                        </figure> 
                        </div> 
                    </div> 
                    </a>
                    </Link> 
                    <div className="pgi-caption">
                    <div className="pgi-caption-inner">
                        <h2 className="pgi-title text-white">{item.title}</h2>
                        <div className="pgi-categories-wrap">
                        <div className="pgi-category text-white">Editorial</div>
                     
                        </div> 
                    </div> 
                    </div>
                </div>

                </div> 
            </div>
         )}
        </div></div></div></div></div>
  );
};

export default EditorialSection;
