import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlankLayout from "./react1/layouts/black/index";
import HomeLayout from "./react1/layouts/home/index";
import Home from "./react1/pages/home/index";
import Shop from "./react1/pages/shop/index";
import Contact from "./react1/pages/contact/index";
import Login from "./react1/pages/login/index";

const Ex13 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/" element={<BlankLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Ex13;
