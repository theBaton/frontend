import React from "react";

const RunningText = () => {
    return (
        <div className="tb-section padding-top-xlg-150 padding-bottom-xlg-150">
            <div className="tb-section-inner">
            <div className="tb-scrolling-text scr-text-stroke font-italic" data-scroll-speed={15}>
                <div className="tb-scrolling-text-inner text-dark-3" data-text="Social & Legal Advocacy Clinic! -">
                Social  &amp; Legal Advocacy Clinic! -
                </div> {/* /.tb-scrolling-text-inner */}
            </div>
            <div className="tb-scrolling-text scr-text-stroke scr-text-reverse font-italic" data-scroll-speed={15}>
                <div className="tb-scrolling-text-inner text-dark-3" data-text="Social & Legal Advocacy Clinic! -">
                Social  &amp; Legal Advocacy Clinic! -
                </div> {/* /.tb-scrolling-text-inner */}
            </div>
            {/* End scrolling text */}
            </div> {/* /.tb-section-inner */}
        </div>
    )
};

export default RunningText;