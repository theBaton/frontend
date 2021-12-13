import React from "react";

const RunningText = () => {
    return (
        <div className="tb-section padding-top-xlg-150 padding-bottom-xlg-150">
            <div className="tb-section-inner">
            {/* Begin scrolling text
                ========================== 
                Change data-scroll-speed="*" to adjust scrolling speed.
                Use class "scr-text-reverse" to reverse scrolling direction. 
                Use class "scr-text-stroke" to enable text stroke style (no effect on smaller screens!). 
                */}
            <div className="tb-scrolling-text scr-text-stroke font-italic" data-scroll-speed={15}>
                <div className="tb-scrolling-text-inner text-dark-3" data-text="Social Advocacy & Legal Clinic! -">
                Social Advocacy &amp; Legal Clinic! -
                </div> {/* /.tb-scrolling-text-inner */}
            </div>
            {/* End scrolling text */}
            {/* Begin scrolling text
                ========================== 
                Change data-scroll-speed="*" to adjust scrolling speed.
                Use class "scr-text-reverse" to reverse scrolling direction. 
                Use class "scr-text-stroke" to enable text stroke style (no effect on smaller screens!). 
                */}
            <div className="tb-scrolling-text scr-text-stroke scr-text-reverse font-italic" data-scroll-speed={15}>
                <div className="tb-scrolling-text-inner text-dark-3" data-text="Social Advocacy & Legal Clinic! -">
                Social Advocacy &amp; Legal Clinic! -
                </div> {/* /.tb-scrolling-text-inner */}
            </div>
            {/* End scrolling text */}
            </div> {/* /.tb-section-inner */}
        </div>
    )
};

export default RunningText;