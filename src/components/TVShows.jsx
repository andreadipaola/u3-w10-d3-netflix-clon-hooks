import MyControlBar from "./MyControlBar";
import MyFooter from "./MyFooter";
import MyGallery from "./MyGallery";

const TVShows = () => (
  <>
    <MyControlBar />
    <MyGallery title="Avengers" />
    <MyGallery title="Guardians of the Galaxy" />
    <MyGallery title="Thor" />
    <MyFooter />
  </>
);

export default TVShows;
