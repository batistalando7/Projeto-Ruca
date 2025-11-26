import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Main() {
  return (
    <>
      {/* Preloader Start */}
      <div id="preloader">
        <div id="loader" class="spinner">
          <div id="shadow"></div>
          <div id="box"></div>
        </div>
      </div>
      {/* Preloader End  */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;
