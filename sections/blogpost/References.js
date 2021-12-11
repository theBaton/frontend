import React from "react";
import parse from "html-react-parser";

const References = ({ data }) => {
    return (
      
        <div className="tb-section">
          {data.references.length != 0 ? (
        <div className="tb-section-inner tb-wrap max-width-900">
          <div className="tb-row">
            <div className="tb-col-lg-8">

              <div className="tb-heading tb-heading-xsm anim-fadeinup">
                <h3 className="tb-heading-title"><em>References</em></h3>
              </div>
              {/* End tb-Heading */}
              <div className="text-gray">
                <ol>
                    {data.references.map((item, index) => {
                        <li>
                            {item.url ?
                                <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                                    {item.title}
                                </a>
                                :
                                <span key={index}>{item.title}</span>
                            }
                        </li>
                    })}
                </ol>
              </div>
            </div> {/* /.tb-col */}
          </div> {/* /.tb-row */}
        </div>
        ) : null}
      </div>
      
    );
};

export default References;