import React from "react";
import android from "../../../assets/services/android_logo.png";
import web from "../../../assets/services/develop.jpg";
import QA from "../../../assets/services/qa.png";
import seo from "../../../assets/services/seo.jpg";
import php from "../../../assets/services/php.png";
import spring from "../../../assets/services/spring.png";
import iot from "../../../assets/services/iot.png";
import ios from "../../../assets/services/ios.png";
import native from "../../../assets/services/native.png";
import code from "../../../assets/services/code.png";
import service from "../../../assets/services/service.png";
const OurServices = () => {
  return (
    <div>
      <section className="banner-bottom-w3layouts bg-li py-5" id="services">
        <div className="container py-xl-5 py-lg-3">
          <h3 className="tittle text-center font-weight-bold">Our Services</h3>
          <p className="sub-tittle text-center mt-3 mb-sm-5 mb-4"></p>
          <div className="row pt-lg-4">
            <div className="col-lg-3 about-in text-center">
              <div className="card">
                <div className="card-body">
                  <h6>Android App Development</h6>
                  <img
                    src={android}
                    alt="Android App Development"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center my-lg-0 my-3">
              <div className="card active">
                <div className="card-body">
                  <h6>Customized Project Development</h6>
                  <a
                    href="customized-project-development.php"
                    className="btn button-style mt-md-6 mt-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center ">
              <div className="card">
                <div className="card-body">
                  <h6>WebSite Design And Development</h6>
                  <img
                    src={web}
                    alt="WebSite Design"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center my-lg-0 my-3">
              <div className="card">
                <div className="card-body">
                  <h6>QA and Testing</h6>
                  <img
                    src={QA}
                    alt="QA and Testing"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-lg-4">
            <div className="col-lg-3 about-in text-center">
              <div className="card">
                <div className="card-body">
                  <h6>SEO and SEM</h6>
                  <img
                    src={seo}
                    alt="SEO and TEsting"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center my-lg-0 my-3">
              <div className="card active">
                <div className="card-body">
                  <h6>Php Laravel Development</h6>
                  <img
                    src={php}
                    alt="Php Laravel Development"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center">
              <div className="card">
                <div className="card-body">
                  <h6>Java Spring Development</h6>
                  <img
                    src={spring}
                    alt="Java Spring Development"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center my-lg-0 my-3">
              <div className="card">
                <div className="card-body">
                  <h6>Internet of Things(IoT)</h6>
                  <img
                    src={iot}
                    alt="Internet of Things"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-lg-4">
            <div className="col-lg-3 about-in text-center">
              <div className="card">
                <div className="card-body">
                  <h6>IT Consultancy Service</h6>
                  <img
                    src={service}
                    alt="IT Consultancy Service"
                    class="img-fluid mt-md-5 mt-4"
                  />
                  {/* <a
                    href="it-consultancy-servies.php"
                    className="btn button-style mt-md-5 mt-4"
                  >
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center">
              <div className="card">
                <div className="card-body">
                  <h6>IOS Development</h6>
                  <img
                    src={ios}
                    alt="IOS Development"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center my-lg-0 my-3">
              <div className="card active">
                <div className="card-body">
                  <h6>Codeigniter</h6>
                  <img
                    src={code}
                    alt="Codeigniter"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center my-lg-0 my-3">
              <div className="card active">
                <div className="card-body">
                  <h6>React Native</h6>
                  <img
                    src={native}
                    alt="React Native"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <script src="js/custom.js"></script>
      </section>
    </div>
  );
};

export default OurServices;
