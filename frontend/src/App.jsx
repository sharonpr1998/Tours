import { useState } from "react";
import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ToursPage from "./pages/ToursPage";
import BlogSingle from "./pages/BlogSingle";
import Error from "./pages/Error";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogLayout from "./components/BlogLayout";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>

        {/* Home */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* About */}

        <Route
          path="/about"
          element={<AboutPage />}
        />

        {/* Tours */}

        <Route
          path="/tours"
          element={<ToursPage />}
        />

        {/* Blog */}

        <Route
          path="/blog/right-sidebar"
          element={<BlogLayout sidebar="right" />}
        />

        <Route
          path="/blog/left-sidebar"
          element={<BlogLayout sidebar="left" />}
        />

        <Route
          path="/blog/no-sidebar"
          element={<BlogLayout sidebar="none" />}
        />

        {/* Single Blog */}

        <Route
          path="/blog/post/:id"
          element={<BlogSingle sidebar="right" />}
        />

        {/* Error */}

        <Route
          path="/pages/404"
          element={<Error />}
        />

        {/* Contact */}

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;