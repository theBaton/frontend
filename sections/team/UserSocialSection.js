import React from 'react';

const UserSocialSection = ( { data } ) => {
    return (
        <div className="project-info-list anim-fadeinup margin-top-10">
            <ul>
              <li>
                <div className="pi-list-heading">Socials</div>
                <div className="pi-list-cont">
                    {data.socials_linkedin ? <a href={data.socials_linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></a> : null}
                    {data.socials_facebook ? <a href={data.socials_facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a> : null}
                    {data.socials_twitter ? <a href={data.socials_twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a> : null}
                    {data.socials_instagram ? <a href={data.socials_instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a> : null}
                </div>
              </li>
            </ul>
        </div>
    );
};

export default UserSocialSection;
