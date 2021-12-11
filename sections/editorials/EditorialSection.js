import React from 'react';
import Link from 'next/link';

const EditorialSection = ( { data } ) => {
    return (
        <div id="portfolio-grid" className="pgi-cap-inside pgi-cap-hover">
        {/* Begin tb-Grid
									=================== 
									* Use class "ttgr-layout-2", "ttgr-layout-3", "ttgr-layout-4" to set grid layout (columns). No class = one column.
									* Use class "ttgr-layout-1-2", "ttgr-layout-2-1", "ttgr-layout-2-3", "ttgr-layout-3-2", "ttgr-layout-3-4" or "ttgr-layout-4-3" to set grid mixed layout (columns).
									* Use class "ttgr-layout-creative-1" or "ttgr-layout-creative-2" to set grid creative mixed layout (no effect with classes "ttgr-portrait", "ttgr-portrait-half", "ttgr-not-cropped" and "ttgr-shifted").
									* Use class "ttgr-portrait" or "ttgr-portrait-half" to enable portrait mode (no effect with classes "ttgr-layout-creative-1", "ttgr-layout-creative-2" and "ttgr-not-cropped").
									* Use class "ttgr-gap-1", "ttgr-gap-2", "ttgr-gap-3", "ttgr-gap-4", "ttgr-gap-5" or "ttgr-gap-6" to add space between items.
									* Use class "ttgr-not-cropped" to enable not cropped mode (effect only with classes "ttgr-layout-2", "ttgr-layout-3" and "ttgr-layout-4").
									* Use class "ttgr-shifted" to enable shifted layout (effect only with classes "ttgr-layout-2", "ttgr-layout-3" and "ttgr-layout-4").
									*/}
        <div className="tb-grid ttgr-layout-creative-1 ttgr-gap-6">
          {/* Begin tb-Grid items wrap 
										============================== */}
          <div className="tb-grid-items-wrap isotope-items-wrap">
            {/* Begin tb-Grid item
											======================== */}
            {data.map( ( item ) =>

            <div key={item._id} className="tb-grid-item isotope-item">
              <div className="ttgr-item-inner">
                {/* Begin portfolio grid item 
													===============================
													* Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"! Also no effect on small screens!).
													*/}
                <div className="portfolio-grid-item">
                  <a href={`/editorials/${item.public_id}`} className="pgi-image-wrap" data-cursor="View<br>Project">
                    {/* Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". */}
                    <div className="pgi-image-holder cover-opacity-2">
                      <div className="pgi-image-inner anim-zoomin">
                        <figure className="pgi-image ttgr-height">
                          <img src={item.cover_image.url} alt={item.cover_image.alternativeText} />
                        </figure> {/* /.pgi-image */}
                      </div> {/* /.pgi-image-inner */}
                    </div> {/* /.pgi-image-holder */}
                  </a> {/* /.pgi-image-wrap */}
                  <div className="pgi-caption">
                    <div className="pgi-caption-inner">
                      <h2 className="pgi-title">{item.title}</h2>
                      <div className="pgi-categories-wrap">
                        <div className="pgi-category text-white">{item.cta_title}</div>
                        {/* <div class="pgi-category">Varia</div> */}
                      </div> {/* /.pli-categories-wrap */}
                    </div> {/* /.pgi-caption-inner */}
                  </div> {/* /.pgi-caption */}
                </div>
                {/* End portfolio grid item */}
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

export default EditorialSection;