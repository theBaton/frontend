import React from 'react';

const UserInfoSection = ( { data } ) => {
    return (
        <div className="project-info-list anim-fadeinup margin-top-60">
            <ul>
              <li>                
                <div className="pi-list-cont">{data.education}</div>
                <div className="pi-list-heading">
                  <a href={`mailto:${data.email}`}>{data.email}</a>
                </div>
              </li>
            </ul>
        </div>
    );
};

export default UserInfoSection;
