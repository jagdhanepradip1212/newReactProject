import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "react-feather";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 mb-3">
              <div className="text-center">
                <a className="logo logo-footer" href="#">
                  <img src="images/logo-light.png" height={25} alt="" />
                </a>
                <p className="text-muted para-desc mx-auto mt-3">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap4 html
                  page.
                </p>
                <ul className="list-unstyled social-icon social mb-0 mt-4">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <Facebook className="fea icon-sm fea-social" />
                    </a>
                  </li>{" "}
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <Instagram className="fea icon-sm fea-social" />
                    </a>
                  </li>{" "}
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <Twitter className="fea icon-sm fea-social" />
                    </a>
                  </li>{" "}
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <Linkedin className="fea icon-sm fea-social" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="back-to-top" id="back-to-top" title="Top">
          <i className="mdi mdi-arrow-up icons bg-light text-dark"> </i>
        </a>
      </footer>

      <footer className="footer-bar bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <p className="mb-0 footer-text para-desc mx-auto">
                © 2024{" "}
                <span className="text-reset">
                  TREENETS TECHNOLOGY SOLUTION PRIVATE LIMITED
                </span>{" "}
                <i className="mdi mdi-heart text-danger" />
                <a
                  href="http://shreethemes.in"
                  target="_blank"
                  className="text-reset"
                ></a>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
