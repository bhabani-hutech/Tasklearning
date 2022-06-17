import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";
import Gallary from "./components/Gallary";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import BlogPost from "./components/BlogPost";
import ListBlogPost from "./components/ListBlogPost";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact-us" exact element={<ContactUs />} />
        <Route path="/blogs" exact element={<Blogs />} />
        <Route path="/blogs/add" exact element={<BlogPost />} />
        <Route path="/blogs/list" exact element={<ListBlogPost />} />
        <Route path="/photos" exact element={<Gallary />} />
        <Route path="/faq" exact element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
