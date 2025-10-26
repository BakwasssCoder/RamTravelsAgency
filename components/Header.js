'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { initWOW, cleanupWOWStyles } from '../lib/wow';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);
  const navbarCollapseRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navbarCollapseRef.current && !navbarCollapseRef.current.contains(event.target) && event.target.closest('.navbar-toggler') === null) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Initialize WOW.js and other jQuery functionality after component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Clean up any existing WOW.js styles to prevent hydration issues
      cleanupWOWStyles();
      
      // Initialize WOW.js for animations with a small delay to ensure all scripts are loaded
      const timeoutId = setTimeout(() => {
        initWOW();
      }, 100);
      
      // Handle dropdown hover effects
      const handleDropdownHover = () => {
        if (window.matchMedia("(min-width: 992px)").matches) {
          const dropdowns = document.querySelectorAll('.dropdown');
          dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');
            
            if (toggle && menu) {
              dropdown.addEventListener('mouseenter', function() {
                this.classList.add('show');
                toggle.setAttribute('aria-expanded', 'true');
                menu.classList.add('show');
              });
              dropdown.addEventListener('mouseleave', function() {
                this.classList.remove('show');
                toggle.setAttribute('aria-expanded', 'false');
                menu.classList.remove('show');
              });
            }
          });
        }
      };
      
      // Handle sticky navbar with jQuery if available
      const handleStickyNavbar = () => {
        if (window.$) {
          window.$(window).scroll(function () {
            if (window.$(this).scrollTop() > 45) {
              window.$('.navbar').addClass('sticky-top shadow-sm');
            } else {
              window.$('.navbar').removeClass('sticky-top shadow-sm');
            }
          });
        }
      };
      
      handleDropdownHover();
      handleStickyNavbar();
      
      // Cleanup
      return () => {
        clearTimeout(timeoutId);
        if (window.$) {
          window.$(window).off('scroll');
        }
      };
    }
  }, []);

  return (
    <div className="header-wrapper" style={{ position: 'relative', zIndex: '1000' }} ref={headerRef}>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2" />
                Patna, Bihar, India
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2" />
                +91 9155969543
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2" />
                info@ramtravelsindia.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center justify-content-end w-100 topbar-social">
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fw-normal" />
              </a>
              <a 
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" 
                href="https://wa.me/919155969543" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp fw-normal" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar & Hero Start */}
      <div className={`container-fluid position-relative p-0 ${isSticky ? 'sticky-top shadow-sm' : ''}`}>
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link href="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-map-marker-alt me-3" />
              Ram Travels
            </h1>
          </Link>
          <button
            className="navbar-toggler rounded-pill border border-primary"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
          >
            <span className="fa fa-bars text-primary" />
          </button>
          <div 
            ref={navbarCollapseRef}
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} 
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-auto py-0">
              <Link href="/" className="nav-item nav-link" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/services" className="nav-item nav-link" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="/about" className="nav-item nav-link" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <div className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  onClick={(e) => {
                    e.preventDefault();
                    // Toggle dropdown on mobile
                    if (window.matchMedia("(max-width: 991px)").matches) {
                      const dropdown = e.target.closest('.dropdown');
                      if (dropdown) {
                        dropdown.classList.toggle('show');
                        const menu = dropdown.querySelector('.dropdown-menu');
                        if (menu) menu.classList.toggle('show');
                      }
                    }
                  }}
                >
                  Tour Destinations
                </Link>
                <div className="dropdown-menu m-0">
                  <Link href="/destinations/chardham" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                    Chardham
                  </Link>
                  <Link href="/destinations/kedarnath" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                    Kedarnath
                  </Link>
                  <Link href="/destinations/himachal" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                    Himachal
                  </Link>
                  <Link href="/destinations/international" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                    International
                  </Link>
                </div>
              </div>
              <Link href="/contact" className="nav-item nav-link" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
              <Link href="/reviews" className="nav-item nav-link" onClick={() => setIsMenuOpen(false)}>
                Reviews
              </Link>
            </div>
            <Link 
              href="https://wa.me/919155969543" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-success rounded-pill py-2 px-4 ms-lg-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </nav>
      </div>
      {/* Navbar & Hero End */}
    </div>
  );
}