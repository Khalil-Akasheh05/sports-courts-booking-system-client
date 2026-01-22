import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import UserNavBar from "./Components/User/NavBar.jsx";
import Home from "./Pages/User/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Sports from "./Pages/User/Sports.jsx";
import Courts from "./Pages/User/Courts.jsx";
import MyBookings from "./Pages/User/MyBookings.jsx";
import Footer from "./Components/User/Footer.jsx";

import Dashbaord from "./Pages/Admin/Dashboard.jsx";
import AdminNavBar from "./Components/Admin/NavBar.jsx";
import ManageSports from "./Pages/Admin/ManageSports.jsx";
import ManageCourts from "./Pages/Admin/ManageCourts.jsx";
import Bookings from "./Pages/Admin/Bookings.jsx";

import PageNotFound from "./Pages/PageNotFound.jsx";

function AppContent() {
  const location = useLocation();
  const storedUser = JSON.parse(localStorage.getItem("user"))

  const hideLayout =
    location.pathname === "/" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && storedUser.role === "user" && <UserNavBar />}
      {!hideLayout && storedUser.role === "admin" && <AdminNavBar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/home" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/courts/:sportId" element={<Courts />} />
        <Route path="/myBookings" element={<MyBookings />} />

        <Route path="/dashboard" element={<Dashbaord />} />
        <Route path="/manage-sports" element={<ManageSports />} />
        <Route path="/manage-courts/:sportId" element={<ManageCourts />} />
        <Route path="/bookings" element={<Bookings />} />
        
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <AppContent />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
