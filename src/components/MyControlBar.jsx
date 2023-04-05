import { Button, ButtonGroup, Container, Dropdown } from "react-bootstrap";

const MyControlBar = () => (
  <div className="bg-custom-dark text-custom-white">
    <Container id="control-bar" className="pb-4 pt-13">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <h2 className="me-5">TV Shows</h2>
          <Dropdown>
            <Dropdown.Toggle variant="outline-custom-white">Generes</Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end p-0">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Adventures</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sci-Fi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex align-items-center">
          <ButtonGroup>
            <Button variant="outline-custom-white" className="ht-38">
              <i className="bi bi-list-ul"></i>
            </Button>
            <Button variant="outline-custom-white" className="ht-38">
              <i className="bi bi-grid"></i>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Container>
  </div>
);

export default MyControlBar;
