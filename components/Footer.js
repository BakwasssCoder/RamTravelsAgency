'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Company</h4>
            <Link className="btn btn-link" href="/about">
              About Us
            </Link>
            <Link className="btn btn-link" href="/contact">
              Contact Us
            </Link>
            <Link className="btn btn-link" href="/reviews">
              Customer Reviews
            </Link>
            <Link className="btn btn-link" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="btn btn-link" href="/terms-conditions">
              Terms & Condition
            </Link>
            <Link className="btn btn-link" href="/faq">
              FAQs & Help
            </Link>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3" />
              Patna, Bihar, India
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3" />
              +91 9155969543
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3" />
              info@ramtravelsindia.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-youtube" />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Gallery</h4>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="assets/img/package-1.jpg"
                  alt="Gallery"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="assets/img/package-2.jpg"
                  alt="Gallery"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="assets/img/package-3.jpg"
                  alt="Gallery"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="assets/img/destination-1.jpg"
                  alt="Gallery"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="assets/img/destination-2.jpg"
                  alt="Gallery"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="assets/img/destination-3.jpg"
                  alt="Gallery"
                />
              </div>
            </div>
            <div className="mt-4">
              <a 
                href="https://instagram.com/anikettt.tsx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Developed By: Bakwassscoder
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; {currentYear} <a className="border-bottom" href="#">Ram Travels India</a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/reviews">Reviews</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-conditions">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}