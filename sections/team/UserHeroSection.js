import React from "react";

const UserHeroSection = ( { data } ) => {
    return (
      <div
        id="page-header"
        className="ph-full ph-cap-sm ph-image-cropped ph-content-parallax"
      >
        <div className="page-header-inner tb-wrap">
          <div className="ph-image">
            <div className="ph-image-inner">
              <img src={data.profile_picture.url} alt="Image" />
            </div>
          </div>
          <div className="ph-caption max-width-1400">
            <div className="ph-categories ph-appear">
              <h4 className="ph-category text-gray" style={{}}>{data.position_title}</h4>
            </div> {/* /.ph-categories */}
            <h2 className="ph-caption-title ph-appear">{data.name}</h2>
            <div className="ph-caption-title-ghost ph-appear">{data.name}</div>
          </div>
          <div className="project-info-list anim-fadeinup margin-top-60">
            <ul>
              <li>                
                <div className="pi-list-cont">{data.education_course}<br />{data.education_university}</div>
                <div className="pi-list-heading">
                  <a href={`mailto:${data.email}`}>{data.email}</a>
                </div>
              </li>
            </ul>
        </div>
        {data.socials_linkedin || data.socials_facebook || data.socials_twitter || data.socials_instagram ? (
        <div className="project-info-list anim-fadeinup margin-top-10">
            <ul>
              <li>
                <div className="pi-list-heading">Socials</div>
                <div className="pi-list-cont margin-right-10">
                    {data.socials_linkedin ? <a href={data.socials_linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></a> : null}
                </div>
                <div className="pi-list-cont margin-right-10">
                    {data.socials_facebook ? <a href={data.socials_facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a> : null}
                </div>
                <div className="pi-list-cont margin-right-10">
                    {data.socials_twitter ? <a href={data.socials_twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a> : null}
                </div>
                <div className="pi-list-cont margin-right-10">
                    {data.socials_instagram ? <a href={data.socials_instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a> : null}
                </div>
              </li>
            </ul>
        </div>
        ) : null}
        </div>

        <a href="#" className="scroll-down-circle" data-offset={30}>
          <div className="sdc-inner ph-appear">
            <div className="sdc-icon"><i className="fas fa-chevron-down" /></div>
            <svg viewBox="0 0 500 500">
              <defs>
                <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle" />
              </defs>
              <text dy={30}>
                <textPath xlinkHref="#textcircle">Scroll down - Scroll down -</textPath>
              </text>
            </svg>
          </div> {/* /.sdc-inner */}
          </a>
      </div>
    );
};

export default UserHeroSection;
