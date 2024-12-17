import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import AuthForm from "./components/AuthForm";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import PetDetails from "./pages/PetDetails";
import Gallary from "./pages/Gallary";
import About from "./components/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import ScrollToTop from "./components/ScrolltoTop";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/pet-details" element={<PetDetails />} />
          <Route path="/gallary-screen" element={<Gallary />} />
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />

          <Route path="/contact" element={<Contact />} />

          {/* Catch-all Route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
