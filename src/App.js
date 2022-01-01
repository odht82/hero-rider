import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import Home from "./Components/pages/HomePage/Home";
// import Services from "./Components/pages/Services/Services";
// import Products from "./Components/pages/Products/Products";
// import SignUp from "./Components/pages/SignUp/SignUp";
// import SignIn from "./Components/pages/SignIn/SignIn";
// import Navbar from "./Components/pages/Shared/Navbar";
// import Footer from "./Components/pages/Footer/Footer";
// import NotFound from "./Components/pages/NotFound/NotFound";
// import PrivateRoute from './Components/pages/PrivateRoute/PrivateRoute';
// import AuthProvider from "./contexts/AuthProvider";
// import Details from "./Components/Details";
// -------------------------------------------------
import PrivateRoute from './Pages/SignIn/PrivateRoute';
import AuthProvider from "./Contexts/AuthProvider";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Pages/Checkout/Checkout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Map from "./Pages/Map/Map";
import Pricing from "./Pages/Pricing/Pricing";
import Profile from "./Pages/Profile/Profile";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pricing/package/:productId" element={<PrivateRoute><Checkout /></PrivateRoute>} />
          <Route path="/map" element={<Map />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;