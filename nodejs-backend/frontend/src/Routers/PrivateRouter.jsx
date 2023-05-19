// * Custom components
import { Home } from "../Pages/Home";
import { Profile } from "../Pages/Profile";
import { NotFound } from "../Pages/NotFound";
import { Navbar } from "../Components/Navbar";

// * React Router Dom
import { Route, Routes } from "react-router-dom";

export const PrivateRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
