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
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Map from "./Pages/Map/Map";
import Pricing from "./Pages/Pricing/Pricing";
import Profile from "./Pages/Profile/Profile";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pricing" element={<PrivateRoute><Pricing /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/pricing/checkout/:vehicle" element={<PrivateRoute><Checkout /></PrivateRoute>} />
          <Route path="/map" element={<PrivateRoute><Map /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
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