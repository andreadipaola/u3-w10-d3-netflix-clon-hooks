import { Col, Container, Row, Button } from "react-bootstrap";

const MySettings = () => (
  <Container className="container mt-10 pb-5">
    <Row>
      <Col xs={10} className="offset-1">
        {/* <!-- FIRST ELEMENT --> */}
        <h1 className="border-bottom pb-3">Account</h1>
        {/* <!-- SECOND ELEMENT --> */}
        <div id="column-second-element" className="border-bottom d-flex">
          <Col xs={3} className="me-5">
            <span className="d-block mb-2 text-custom-gray">MEMBERSHIP & BILLING</span>
            <Button variant="custom-lightgray" className="pfs-13 px-4 border-bottom">
              Cancel Membership
            </Button>
          </Col>
          <Col>
            <div className="border-bottom">
              <div className="d-flex justify-content-between mb-1">
                <span className="fw-semibold">student@strive.school</span>
                <a href="#">
                  <span>Change account email</span>
                </a>
              </div>
              <div className="d-flex justify-content-between mb-1">
                <span className="text-custom-gray">Password: ********</span>
                <a href="#">
                  <span>Change password</span>
                </a>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-custom-gray">Phone: 321 044 1279</span>
                <a href="#">
                  <span>Change phone number</span>
                </a>
              </div>
            </div>
            <div className="border-bottom pb-2">
              <div id="column-payment-element" className="d-flex justify-content-between pt-2 mb-1">
                <div className="d-flex align-item-center">
                  <img className="ht-20 me-3" src={require("../assets/img/paypal.png")} alt="" />
                  <span className="fw-semibold">admin@strive.school</span>
                </div>
                <a href="#">
                  <span>Update payment info</span>
                </a>
              </div>
              <div className="d-flex justify-content-end">
                <a href="#">
                  <span>Billing Details</span>
                </a>
              </div>
            </div>
            <div className="pt-2 mb-2">
              <div className="d-flex justify-content-end mb-1">
                <a href="#">
                  <span>Redeem gift card or promo code</span>
                </a>
              </div>

              <div className="d-flex justify-content-end">
                <a href="#">
                  <span>Where to buy gift cards</span>
                </a>
              </div>
            </div>
          </Col>
        </div>
        {/* <!-- THIRD ELEMENT --> */}
        <div id="column-third-element" className="border-bottom d-flex py-2 mb-2">
          <Col xs={3} className="me-5">
            <div className="text-custom-gray">PLAN DETAILS</div>
          </Col>
          <Col>
            <div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <span className="fw-semibold me-2">Premium</span>
                  <div className="d-block">
                    <svg className="ht-16" viewBox="0 0 4770 960">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <path
                          d="M724,595 C724,642 714,672 694,684 C673,696 622,702 538,702 C460,702 412,696 393,684 C373,672 363,642 363,595 L363,247 L291,247 L291,612 C291,665 309,701 344,721 C379,739 445,749 543,749 C647,749 715,739 748,720 C780,700 796,659 796,595 L796,247 L724,247 L724,595 Z M1013,691 L1013,247 L941,247 L941,744 L1341,744 L1341,691 L1013,691 Z M1858,299 L1858,247 L1372,247 L1372,299 L1580,299 L1580,744 L1652,744 L1652,299 L1858,299 Z M2428,617 C2428,556 2394,525 2327,520 L2327,519 C2369,515 2398,503 2414,484 C2429,467 2437,434 2437,388 C2437,336 2422,300 2394,278 C2366,257 2318,247 2249,247 L1946,247 L1946,744 L2018,744 L2018,542 L2259,542 C2323,542 2356,571 2356,629 L2356,744 L2428,744 L2428,617 Z M2337,475 C2318,489 2281,495 2225,495 L2018,495 L2018,295 L2250,295 C2299,295 2331,301 2345,314 C2360,328 2368,358 2368,402 C2368,438 2358,462 2337,475 Z M3008,744 L3083,744 L2844,247 L2743,247 L2510,744 L2586,744 L2635,639 L2958,639 L3008,744 Z M2937,596 L2656,596 L2795,292 L2937,596 Z M3730,549 L3428,549 L3428,746 L3330,746 L3330,247 L3428,247 L3428,443 L3730,443 L3730,247 L3829,247 L3829,746 L3730,746 L3730,549 Z M4226,247 C4301,247 4356,260 4389,286 C4417,306 4438,335 4454,372 C4470,408 4478,449 4478,493 C4478,591 4449,661 4389,706 C4356,732 4301,746 4226,746 L3980,746 L3980,247 L4226,247 Z M4216,639 C4346,639 4373,562 4373,493 C4373,427 4359,351 4216,351 L4078,351 L4078,639 L4216,639 Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M4638.00019,0 C4711.00009,0 4770,59 4770,132 L4770,827 C4770,868.423884 4751.51202,905.147426 4722.42954,929.452533 C4699.55882,948.56629 4670.13605,960 4638.00019,960 L133.999803,960 C58.9999134,960 0,901 0,827 L0,132 C0,59 58.9999134,0 133.999803,0 L4638.00019,0 Z M133.999803,80 C103.999847,80 79.9998826,103 79.9998826,132 L79.9998826,827 C79.9998826,857 103.999847,880 133.999803,880 L4638.00019,880 C4667.00015,880 4690.00012,856 4690.00012,827 L4690.00012,132 C4690.00012,103 4667.00015,80 4638.00019,80 L133.999803,80 Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <a href="#">
                  <span>Change plan</span>
                </a>
              </div>
            </div>
          </Col>
        </div>
        {/* <!-- FOUTH ELEMENT --> */}
        <div id="column-fourth-element" className="border-bottom d-flex pb-2">
          <Col xs={3} className="me-5">
            <div className="text-custom-gray">SETTINGS</div>
          </Col>
          <Col>
            <div className="d-flex flex-column">
              <div className="mb-1">
                <a href="#">
                  <span>Parental controls</span>
                </a>
              </div>
              <div className="mb-1">
                <a href="#">
                  <span>Test participation</span>
                </a>
              </div>
              <div className="mb-1">
                <a href="#">
                  <span>Manage download devices</span>
                </a>
              </div>
              <div className="mb-1">
                <a href="#">
                  <span>Activate a device</span>
                </a>
              </div>
              <div className="mb-1">
                <a href="#">
                  <span>Recent device streaming activity</span>
                </a>
              </div>
              <div>
                <a href="#">
                  <span>Sign out of all devices</span>
                </a>
              </div>
            </div>
          </Col>
        </div>
        {/* <!-- FIFTH ELEMENT --> */}
        <div id="column-fifth-element" className="d-flex pt-2">
          <Col xs={3} className="me-5">
            <div className="text-custom-gray">MY PROFILE</div>
          </Col>
          <Col>
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="d-flex align-items-center">
                  <img className="ht-32 me-2" src={require("../assets/img/avatar.png")} alt="" />
                  <span className="fw-semibold">Strive student</span>
                </div>
                <div className="d-flex flex-column align-items-end">
                  <a href="#">
                    <span className="d-block">Manage profiles</span>
                  </a>
                  <a href="#">
                    <span className="align-center">Add profile email</span>
                  </a>
                </div>
              </div>
              <Row className="mb-1">
                <Col xs={5}>
                  <a href="#">
                    <span>Language</span>
                  </a>
                </Col>
                <Col>
                  <a href="#">
                    <span>Viewing activity</span>
                  </a>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col xs={5}>
                  <a href="#">
                    <span>Payback settings</span>
                  </a>
                </Col>
                <Col>
                  <a href="#">
                    <span>Ratings</span>
                  </a>
                </Col>
              </Row>
              <div id="last-item">
                <a href="#">
                  <span>Subtitle appearence</span>
                </a>
              </div>
            </div>
          </Col>
        </div>
      </Col>
    </Row>
  </Container>
);

export default MySettings;
