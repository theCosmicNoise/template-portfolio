import "./App.scss";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";
import { AnimatePresence } from "framer-motion";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  return (
    <AnimatePresence wait>
      <Routes key={location.pathname} location={location}>
        <Route index path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="experience"
          element={
            <Layout>
              <Experience />
            </Layout>
          }
        />
        <Route
          path="blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="blog/:slug"
          element={
            <Layout>
              <BlogPost />
            </Layout>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
