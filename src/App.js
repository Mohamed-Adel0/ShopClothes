import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ThreeSeaction from "./Components/Home/ThreeSeaction/ThreeSeaction.jsx";
import Footer from "./Components/Footer/Footer";
import Clothings from "./Components/Clothings/Clothings/Clothings";
import Accessories from "./Components/Clothings/Accessories/Accessories";
import Clothingsitems from "./Components/Clothings/Clothingsitems/Clothingsitems";
import Shirts from "./Components/Clothings/Shirts/Shirts";
import Shoes from "./Components/Clothings/Shoes/Shoes";
import Shorts from "./Components/Clothings/Shorts/Shorts";
import FourSeaction from "./Components/Home/FourSeaction/FourSeaction.jsx";
import SingalProducts from "./Components/SingalProudcts/SingalProducts.jsx";
import Cart from "./Components/SingalProudcts/Cart/Cart.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { useEffect } from "react";
import Loading from "./Components/Loading/Loading.jsx";

function App() {
  useEffect((r) => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Loading />
      <ToastContainer />
      <Routes>
        {/* Here for change elements links from navbar in Page Home */}
        <>
          <Route
            path="/"
            element={<ThreeSeaction />}
            children={<Route index element={<FourSeaction />} />}
          />
          <Route
            path="/"
            element={<ThreeSeaction />}
            children={<Route path="accessories" element={<Accessories />} />}
          />
          <Route
            path="/"
            element={<ThreeSeaction />}
            children={<Route path="clothing" element={<Clothingsitems />} />}
          />
          <Route
            path="/"
            element={<ThreeSeaction />}
            children={<Route path="shirts" element={<Shirts />} />}
          />
          <Route
            path="/"
            element={<ThreeSeaction />}
            children={<Route path="shoes" element={<Shoes />} />}
          />
          <Route
            path="/"
            element={<ThreeSeaction />}
            children={<Route path="shorts" element={<Shorts />} />}
          />
          <Route
            path="clothings"
            element={<Clothings />}
            children={<Route index element={<Clothingsitems />} />}
          />
        </>
        {/* End for change elements links from navbar in Page Home */}

        {/* Here for Clothings */}
        <>
          <Route
            path="clothings"
            element={<Clothings />}
            children={<Route path="accessories" element={<Accessories />} />}
          />
          <Route
            path="accessories"
            element={<Clothings />}
            children={<Route path="accessories" element={<Accessories />} />}
          />
          <Route
            path="clothings"
            element={<Clothings />}
            children={<Route path="clothings" element={<Clothingsitems />} />}
          />
          <Route
            path="clothings"
            element={<Clothings />}
            children={<Route path="shirts" element={<Shirts />} />}
          />
          <Route
            path="clothings"
            element={<Clothings />}
            children={<Route path="shoes" element={<Shoes />} />}
          />
          <Route
            path="clothings"
            element={<Clothings />}
            children={<Route path="shorts" element={<Shorts />} />}
          />
        </>
        {/* End for Clothings */}

        {/* Here for NavBar */}
        <>
          <Route path="clothings" element={<Clothings />} />
          <Route path="clothings/accessories" element={<Clothings />} />
          <Route path="/clothings/shirts" element={<Clothings />} />
          <Route path="/clothings/shoes" element={<Clothings />} />
          <Route path="/clothings/clothings" element={<Clothings />} />
          <Route path="/clothings/accessories" element={<Clothings />} />
        </>
        {/* End for NavBar */}

        {/* Here for singal Product */}
        <>
          <Route path=":id" element={<SingalProducts />} />
          <Route path="accessories/:id" element={<SingalProducts />} />
          <Route path="clothing/:id" element={<SingalProducts />} />
          <Route path="shirts/:id" element={<SingalProducts />} />
          <Route path="shoes/:id" element={<SingalProducts />} />
          <Route path="shorts/:id" element={<SingalProducts />} />
          <Route path="cart/:id" element={<SingalProducts />} />
          {/* Here for Page Clothings */}
          <Route
            path="clothings/accessories/:id"
            element={<SingalProducts />}
          />
          <Route path="clothings/clothings/:id" element={<SingalProducts />} />
          <Route path="clothings/shirts/:id" element={<SingalProducts />} />
          <Route path="clothings/shoes/:id" element={<SingalProducts />} />
          <Route path="clothings/shorts/:id" element={<SingalProducts />} />
          <Route path="clothings/:id" element={<SingalProducts />} />
        </>
        {/* End for singal Product */}

        {/* Here for Add to Cart */}
        <>
          <Route path="cart" element={<Cart />} />
        </>
        {/* End for Add to Cart */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
