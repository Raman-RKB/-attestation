/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import MainScreen from "./pages/main/main";
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import MyTracks from "./pages/MyTracks/mytracks";
import PlaylistOfTheDay from "./pages/PlaylistOfTheDay/PlaylistOfTheDay";
import DanceHits from "./pages/100DanceHits/100DanceHits";
import IndieCharge from "./pages/IndieCharge/IndieCharge";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/mytracks" element={<MyTracks />} />
        <Route path="/PlaylistOfTheDay" element={<PlaylistOfTheDay />} />
        <Route path="/100DanceHits" element={<DanceHits />} />
        <Route path="/IndieCharge" element={<IndieCharge />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
