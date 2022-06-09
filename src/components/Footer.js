import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/images/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faListCheck } from "@fortawesome/free-solid-svg-icons"
import { fa } from "@fortawesome/free-solid-svg-icons"

const Footer = ({}) => {
  return (
    <section className="footer-container">
      <section className="prefooter">
        <Container>
          <div className="heading-container mb-3">
            <span>GET STARTED TODAY AND REACH</span>
            <span>YOUR BUSINESS GOALS</span>
          </div>
          <p className="subtitle text-center mb-4">
            YohDev is here for you. Contact us today and let's build your
            business goals.
          </p>
          <Row className="prefooter-block-container justify-content-md-center">
            <Col md={4} className="prefooter-block-container">
              <div className="prefooter-block left">
                <div className="block-border"></div>
                <div className="block-content">
                  <div className="icon">
                    <FontAwesomeIcon icon={faListCheck} />
                  </div>
                  <h3 className="heading">Needs Assessment</h3>
                  <p className="text">
                    Let us know what you need, and we'll find the best solution
                    to satisfy your business goals.
                  </p>
                  <button className="btn gradient-btn">
                    Fill The Assessment Out
                  </button>
                </div>
              </div>
            </Col>
            <Col md={4} className="prefooter-block-container">
              <div className="prefooter-block right">
                <div className="block-border"></div>
                <div className="block-content">
                  <div className="icon">
                    <FontAwesomeIcon icon={faListCheck} />
                  </div>
                  <h3 className="heading">Needs Assessment</h3>
                  <p className="text">
                    Let us know what you need, and we'll find the best solution
                    to satisfy your business goals.
                  </p>
                  <button className="btn gradient-btn">
                    Fill The Assessment Out
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="footer-bottom">
        <Container>
          <Row className="justify-content-md-between">
            <Col md={2} sm={12}>
              <div className="footer-block one">
                <img src={logo} alt="Logo" className="img-fluid" />
              </div>
            </Col>
            <Col md={2} sm={12}>
              <div className="footer-block two">
                <span className="footer-block-title">About</span>
                <div className="footer-links">
                  <Link to="/">Case Studies</Link>
                  <Link to="/">Partners</Link>
                  <Link to="/">Careers</Link>
                  <Link to="/">Contact Us</Link>
                </div>
              </div>
            </Col>
            <Col md={2} sm={12}>
              <div className="footer-block three">
                <span className="footer-block-title">Capabilities</span>
                <div className="footer-links">
                  <Link to="/">Web Development</Link>
                  <Link to="/">Ux.UI Design</Link>
                  <Link to="/">DevOps</Link>
                  <Link to="/">IT&amp;Cloud Services</Link>
                </div>
              </div>
            </Col>
            <Col md={2} sm={12}>
              <div className="footer-block four">
                <span className="footer-block-title">Resources</span>
                <div className="footer-links">
                  <Link to="/">Our Process</Link>
                  <Link to="/">FAQ's</Link>
                </div>
              </div>
            </Col>
            <Col md={3} sm={12}>
              <div className="footer-block five">
                <a href="/" className="btn gradient-btn">
                  Contact Us
                </a>
                <span className="address">Winston-Salem NC, 27103</span>
                <Link to="mailto:hello@yohdev.com" className="email">
                  hello@yohdev.com
                </Link>
                <span className="phone">336-701-5618</span>
                <div className="social"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="copyright-container text-center py-3">
        <span className="copyright">
          &copy; 2022 YohDev All Rights Reserved
        </span>
      </section>
    </section>
    // <footer id="site-footer" role="contentinfo" className="header-footer-group">
    //   <div className="section-inner">
    //     <div className="footer-credits">
    //       <p className="footer-copyright">
    //         © {new Date().getFullYear()}{" "}
    //         <Link to={"/"}>Gatsby Starter WordPress Twenty Twenty</Link>
    //       </p>
    //       <p>
    //         <a
    //           className="powered-by-wordpress"
    //           href="https://www.henrikwirth.com"
    //           rel="noreferrer noopener"
    //         >
    //           Proudly presented by Henrik Wirth
    //         </a>
    //       </p>
    //     </div>

    //     <a className="to-the-top" href="#site-header">
    //       <span className="to-the-top-long">
    //         To the top{" "}
    //         <span className="arrow" aria-hidden="true">
    //           ↑
    //         </span>
    //       </span>
    //       <span className="to-the-top-short">
    //         Up{" "}
    //         <span className="arrow" aria-hidden="true">
    //           ↑
    //         </span>
    //       </span>
    //     </a>
    //   </div>
    // </footer>
  )
}

export default Footer
