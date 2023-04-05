import MyNav from "./components/MyNav";
import MyControlBar from "./components/MyControlBar";
import MyGallery from "./components/MyGallery";
import MyFooter from "./components/MyFooter";
import MySettings from "./components/MySettings";
import MyProfile from "./components/MyProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";

const App = () => (
  <BrowserRouter>
    <div className="vh-100 bg-custom-dark">
      <MyNav />
      <Routes>
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  </BrowserRouter>

  // <div className="vh-100 bg-custom-dark">
  //   <MyNav />
  //   <MyControlBar />
  //   <MyGallery title="Avengers" />
  //   <MyGallery title="Guardians of the Galaxy" />
  //   <MyGallery title="Thor" />
  //   <MyFooter />
  // </div>

  // <>
  //   <MyNav />
  //   <MySettings />
  // </>

  // <>
  //   <MyNav />
  //   <MyProfile />
  // </>
);

export default App;
