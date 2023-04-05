import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";

const MyProfile = () => (
  <div className="bg-custom-dark text-custom-white">
    <Container id="profile-form" className="pt-10" style={{ width: "490px", height: "100vh" }}>
      {/* <!-- ROW 1--> */}
      <Row>
        <Col xs={12} className="border-bottom px-0">
          <h1 className="display-4">Edit Profile</h1>
        </Col>
      </Row>
      {/* <!-- ROW 2--> */}
      <Row className="pt-3">
        {/* <!-- COL 2.1--> */}
        <Col className="px-0 d-flex">
          {/* <!-- COL 2.1.1 --> */}
          <div className="pe-4">
            <div className="position-relative">
              <img className="rounded ht-105" src={require("../assets/img/avatar.png")} alt="" />
              <span className="pencil-container rounded-circle bg-dark border shadow position-absolute bottom-0 start-0 ms-1 mb-1">
                <i className="bi bi-pencil-fill pfs-9"></i>
              </span>
            </div>
          </div>
          {/* <!-- COL 2.1.2 --> */}
          <div>
            <div className="d-flex flex-column align-items-start pe-3">
              <span className="bg-custom-darkestgray px-3 py-1 col-12 mb-3">Strive Student</span>
              <span className="text-custom-gray mb-1">Language:</span>
              <Dropdown>
                <Dropdown.Toggle variant="outline-custom-white" size="sm" className="mb-3" aria-expanded="false">
                  Choose language
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Italian</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="d-flex flex-column align-items-start border-top">
              <span className="text-custom-gray pt-3 pb-2">Maturity Settings:</span>
              <span className="bg-custom-ultradarkgray pfs-14 px-2 py-1 mb-2">ALL MATURITY RATINGS</span>
              <span className="mb-3 pfs-14">Show titles of all maturity ratings for this profile.</span>
              <Button variant="outline-secondary" size="sm" className="px-3 mb-4">
                EDIT
              </Button>
            </div>

            <div className="d-flex flex-column align-items-start pt-3 mb-3 border-top">
              <span className="text-custom-gray mb-2">Autoplay controls</span>
              <Form>
                <Form.Check className="mb-3" type="checkbox">
                  <Form.Check.Input className="me-2" type="checkbox" checked />
                  <Form.Check.Label className="pfs-13" htmlFor="">
                    Autoplay next episode in a series on all devices.
                  </Form.Check.Label>
                </Form.Check>

                <Form.Check className="mb-3" type="checkbox">
                  <Form.Check.Input className="me-2" type="checkbox" checked />
                  <Form.Check.Label className="pfs-13">
                    Autoplay previews while browsing on all devices.
                  </Form.Check.Label>
                </Form.Check>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
      {/* <!-- ROW 3--> */}
      <Row>
        <Col xs={12} className="pt-4 px-0 border-top">
          <Button variant="light" className="me-3 px-4">
            SAVE
          </Button>
          <Button variant="outline-secondary" className="me-3 px-4">
            CANCEL
          </Button>
          <Button variant="outline-secondary" className="px-4">
            DELETE PROFILE
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default MyProfile;
