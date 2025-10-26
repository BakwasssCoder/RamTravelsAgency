'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Privacy Policy
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Your privacy is important to us
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="bg-white rounded p-4 shadow-sm">
                <h2 className="text-primary mb-4">Privacy Policy for Ram Travels India</h2>
                
                <p className="mb-4">
                  At Ram Travels India, accessible from https://www.ramtravelsindia.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Ram Travels India and how we use it.
                </p>
                
                <p className="mb-4">
                  If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                </p>
                
                <h3 className="text-primary mt-4 mb-3">Log Files</h3>
                <p className="mb-4">
                  Ram Travels India follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                </p>
                
                <h3 className="text-primary mt-4 mb-3">Cookies and Web Beacons</h3>
                <p className="mb-4">
                  Like any other website, Ram Travels India uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                </p>
                
                <h3 className="text-primary mt-4 mb-3">Google DoubleClick DART Cookie</h3>
                <p className="mb-4">
                  Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a>
                </p>
                
                <h3 className="text-primary mt-4 mb-3">Our Advertising Partners</h3>
                <p className="mb-4">
                  Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.
                </p>
                
                <ul className="mb-4">
                  <li className="mb-2">Google: <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></li>
                </ul>
                
                <h3 className="text-primary mt-4 mb-3">Privacy Policies</h3>
                <p className="mb-4">
                  You may consult this list to find the Privacy Policy for each of the advertising partners of Ram Travels India.
                </p>
                
                <p className="mb-4">
                  Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Ram Travels India, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                </p>
                
                <p className="mb-4">
                  Note that Ram Travels India has no access to or control over these cookies that are used by third-party advertisers.
                </p>
                
                <h3 className="text-primary mt-4 mb-3">Third Party Privacy Policies</h3>
                <p className="mb-4">
                  Ram Travels India's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                </p>
                
                <h3 className="text-primary mt-4 mb-3">Children's Information</h3>
                <p className="mb-4">
                  Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                </p>
                
                <p className="mb-4">
                  Ram Travels India does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                </p>
                
                <h3 className="text-primary mt-4 mb-3">Online Privacy Policy Only</h3>
                <p className="mb-4">
                  This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Ram Travels India. This policy is not applicable to any information collected offline or via channels other than this website.
                </p>
                
                <h3 className="text-primary mt-4 mb-3">Consent</h3>
                <p className="mb-4">
                  By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
                </p>
                
                <div className="mt-5">
                  <Link href="/" className="btn btn-primary py-2 px-4">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}