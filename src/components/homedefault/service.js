import React from "react";
import { FiMonitor, FiActivity, FiNavigation } from "react-icons/fi";

const Service = () => {
  return (
    <div className="rn-service-area rn-section-gapBottom">
      {/* Start Service Area  */}
      <div className="rn-service-area">
        <div className="container">
          <div className="row">
            {/* Start Single Service  */}
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div
                className="service wow fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1000ms"
              >
                <div className="inner">
                  <div className="icon">
                    <FiMonitor />
                  </div>
                  <div className="content">
                    <h4 className="title">Web Developer</h4>
                    <p>
                      JavaScript, React.js, HTML5, CSS3, jQuery, and Bootstrap.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Service  */}

            {/* Start Single Service  */}
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div
                className="service wow fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1000ms"
              >
                <div className="inner">
                  <div className="icon">
                    <FiActivity />
                  </div>
                  <div className="content">
                    <h4 className="title">Software Engineer</h4>
                    <p>Python, MySql, MongoDB, Node.js, and Express.js.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Service  */}

            {/* Start Single Service  */}
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div
                className="service wow fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1000ms"
              >
                <div className="inner">
                  <div className="icon">
                    <FiNavigation />
                  </div>
                  <div className="content">
                    <h4 className="title">Full-Stack</h4>
                    <p>
                      Agile Development, API's, Web Designer, Writer, and More!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Service  */}
          </div>
        </div>
      </div>
      {/* End Service Area  */}
    </div>
  );
};

export default Service;
