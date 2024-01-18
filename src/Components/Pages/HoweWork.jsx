import React from "react";
import Hww from "../../assets/hww.png";
import AptFooter from "../Footer/aptFooter";
const HoweWork = () => {
  return (
    <>
      <meta name="theme-color" content="#191919" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        media="all"
        href="https://www.aptlogica.com/wp-content/cache/autoptimize/css/autoptimize_2f9dbe091aeec00f382beb4706c25aa9.css"
        rel="stylesheet"
      />
      <title>How we work</title>
      <meta name="robots" content="max-image-preview:large" />
      <link rel="dns-prefetch" href="//www.google.com" />
      <link rel="dns-prefetch" href="//use.fontawesome.com" />
      <link rel="dns-prefetch" href="//c0.wp.com" />
      <link rel="dns-prefetch" href="//i0.wp.com" />
      <link href="https://sp-ao.shortpixel.ai" rel="preconnect" />
      <link
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
        rel="preconnect"
      />

      <section className="cm-style cm-banner how-we-work">
        <div className="overlay" />
        <div className="container relative">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <p className="smaller-heading wow fadeInUp" data-wow-delay="0.2s">
                HOW WE WORK ?
              </p>
              <div className="line wow fadeInLeft" data-wow-delay="0.2s" />
              <h1
                className="pri-head-black mb-4 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                We Believe That Our Job Is More Than Just Delivering A Product
              </h1>
              <p
                className="heading-sub-text mar-b-63 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                Our client relationships are built on trust and hence have a
                transparency policy that allows us to share our work methods and
                the rules we work on.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="cm-style how-we-work-sub pad-130">
        <div className="container">
          <h1
            className="pri-head-black mar-b-25 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            Agile Methodologies Optimization and Transparency
          </h1>
          <p
            className="heading-sub-text mar-b-63 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            The best way to get the desired result for a complex product is
            working alongside our customer. We believe that by employing various
            methodologies and processes that facilitate communication, we ensure
            that the customer is always kept in the loop and can also help us
            better grasp the projects needs.
          </p>
        </div>
      </section>
      <section className="cm-style how-we-work-sub pad-130 working-process">
        <div className="container">
          <h1
            className="pri-head-black mar-b-25 white-color wow fadeInUp"
            data-wow-delay="0.2s"
          >
            Working Process
          </h1>
          <p
            className="heading-sub-text mar-b-63 white-color wow fadeInUp"
            data-wow-delay="0.4s"
          >
            Each company has their own process that ensures they are able to
            carry out the given project appropriately. Although we are always
            happy to tailor the process based on your needs here is the basic
            skeleton of what we will do if you choose us as a development
            partner.
          </p>

          <img
            decoding="async"
            src={Hww}
            alt=""
            className="lazyload img-fluid wow fadeInUp "
            data-wow-delay="0.6s"
          />
        </div>
      </section>

      <section className="cm-style how-we-work-sub pad-130 team-talent">
        <div className="container">
          <h1
            className="pri-head-black mar-b-25 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            Talent wins games, but teamwork and intelligence win championships.
          </h1>
          <p
            className="heading-sub-text mar-b-63 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            We know the importance of having a great team; this is why we only
            hire the best. At the same time, we can also send skilled members of
            our teams to help you with mobile and web app development or product
            design, management, and quality assurance.
          </p>
          <div className="box-holder">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 no-pad">
                <div className="box wow fadeInUp" data-wow-delay="0.4s">
                  <h2 className="blue-medium-head">OFFSHORE DEVELOPMENT</h2>
                  <ul>
                    <li>Successful solutions through adept teams</li>
                    <li>Assured cost savings</li>
                    <li>Clear and prompt communications</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 no-pad">
                <div className="box wow fadeInUp " data-wow-delay="0.6s">
                  <h2 className="blue-medium-head">ON-SITE DEVELOPMENT</h2>
                  <ul>
                    <li>
                      Certified software professionals to handle core as well as
                      supportive roles
                    </li>
                    <li>Complete control over team’s efficiency</li>
                    <li>Zero communication errors</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 no-pad">
                <div className="box wow fadeInUp" data-wow-delay="0.8s">
                  <h2 className="blue-medium-head">HYBRID DEVELOPMENT</h2>
                  <ul>
                    <li>
                      A mix of offshore and on-site models, to leverage maximum
                      potential in a project
                    </li>
                    <li>
                      Optimized execution, perfect resources, processes, and
                      guaranteed quality
                    </li>
                    <li>
                      Prominent Cost-effectiveness and savings by the way of
                      offshore development and high work quality advantage
                      through on-site resource presence
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AptFooter />

      <div className="cli-modal-backdrop cli-fade cli-settings-overlay" />
      <div className="cli-modal-backdrop cli-fade cli-popupbar-overlay" />
    </>
  );
};

export default HoweWork;
