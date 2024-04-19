import { ToastContainer } from "react-toastify";
import "./App.css";
import ContactUs from "./Pages/ContactUs/ContactUs";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from "./Pages/AboutUs/About";
import Blogs from "./Pages/Blogs/Blog";
import MostPopular from "./Pages/Blogs/Components/MostPopular";
import Login from "./Pages/Login/Login";
import DataForm from "./Pages/DataForm/DataForm";
import BadgesSearch from "./Pages/BadgesSearch/BadgesSearch";

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/most-popular/:index" element={<MostPopular />} />
            <Route path="/login" element={<Login />} />
            <Route path="/data-entry" element={<DataForm />} />
            <Route path="/badges-search" element={<BadgesSearch />} />
            
          </Routes>
         <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
