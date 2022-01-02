import React from "react";

const UserWorksHeadingSection = ( { title } ) => {
    return (
          <div className="tb-heading tb-heading-lg tb-heading-center margin-bottom-10-p anim-fadeinup">
            <h2 className="tb-heading-title">{title}</h2>
          </div>
    );
};

export default UserWorksHeadingSection;