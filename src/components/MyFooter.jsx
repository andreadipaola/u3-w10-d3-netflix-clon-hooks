import { Button, Container } from "react-bootstrap";

const MyFooter = () => (
  <div className="bg-custom-dark">
    <Container id="footer" className="pt-13 pb-5 py-3 pfs-13 text-custom-darkgray d-flex justify-content-center">
      <div>
        <div className="mb-4">
          <i className="bi bi-facebook me-3 pfs-24"></i>
          <i className="bi bi-instagram me-3 pfs-24"></i>
          <i className="bi bi-twitter me-3 pfs-24"></i>
          <i className="bi bi-youtube pfs-24"></i>
        </div>

        <div className="d-flex mb-4 flex-wrap">
          <div className="d-flex flex-column me-5">
            <span className="mb-3">Audio and Subtitles</span>
            <span className="mb-3">Media Center</span>
            <span className="mb-3">Privacy</span>
            <span>Contact Us</span>
          </div>

          <div className="d-flex flex-column me-5">
            <span className="mb-3">Audio Description</span>
            <span className="mb-3">Investor Relations</span>
            <span>Legal Notices</span>
          </div>

          <div className="d-flex flex-column me-5">
            <span className="mb-3">Help Center</span>
            <span className="mb-3">Jobs</span>
            <span>Cookie Preferences</span>
          </div>

          <div className="d-flex flex-column">
            <span className="mb-3">Gift Cards</span>
            <span className="mb-3">Terms of Use</span>
            <span>Corporate Information</span>
          </div>
        </div>

        <div className="mb-3">
          <Button variant="outline-custom-darkgray" className="pfs-13">
            {/* <Button variant="primary" className="pfs-13"> */}
            Service Code
          </Button>
        </div>

        <div className="pfs-11">&copy; 1997-2023 Netflix, Inc</div>
      </div>
    </Container>
  </div>
);

export default MyFooter;
