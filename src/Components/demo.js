import React from 'react';

const YourComponent = () => {
  return (
    <section
      className="cm-style cm-banner home-hero home-slider-section"
      id="container-p5"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Adjust the alpha value as needed
    >
      <video
        className="home-section-video"
        id="video_player"
        autoPlay=""
        loop=""
        muted=""
      >
        <source
          src="https://videos.files.wordpress.com/RYYRqfQU/home-hero-video-1_hd.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <div className="row slide-title">
          <div className="col-lg-8 col-md-6 col-sm-12 col-12">
            <h1 className="pri-head-black wow fadeInUp" data-wow-delay="0.2s">
              Simplifying Digital Transformation
            </h1>
            <p
              className="heading-sub-text m-b-45 wow fadeInUp"
              data-wow-delay="0.4s"
              style={{ maxWidth: 600 }}
            >
              At Aptlogica we offer you deep insights and powerful technology
              competence, helping you meet your digital transformation needs.
            </p>
            <div>
              <a
                href="https://www.aptlogica.com/hire-us/"
                className="cm-btn-hover wow fadeInUp"
                data-wow-delay="0.8s"
              >
                let's talk
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 equal" />
        </div>
      </div>
    </section>
  );
};

export default YourComponent;
