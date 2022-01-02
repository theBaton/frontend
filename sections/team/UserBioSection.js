import React from 'react';

const UserBioSection = ( { data } ) => {
    return (
        <div>
        {data.bio ?
            <div className="tb-section padding-top-xlg-180 padding-left-sm-3-p padding-right-sm-3-p">
              <div className="tb-section-inner tb-wrap">
                <div className="tb-row">
                  <div className="tb-col-lg-4 padding-right-md-5-p">
                    <div className="tb-heading tb-heading-xsm margin-bottom-60 anim-fadeinup">
                      <h2 className="tb-heading-title">Bio</h2>
                    </div>
                  </div> {/* /.tb-col */}
                  <div className="tb-col-lg-8">
                    <div className="anim-fadeinup text-gray">
                    {data.bio}
                    </div>
                  </div> {/* /.tb-col */}
                </div> {/* /.tb-row */}
              </div> {/* /.tb-section-inner */}
            </div>
        : null}
        </div>
    );
};

export default UserBioSection;
