import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import MeshBackground from './components/layout/MeshBackground';
import CustomCursor from './components/layout/CustomCursor';
import ScrollProgressBar from './components/layout/ScrollProgressBar';
import Loader from './components/layout/Loader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 60, easing: 'ease-out-cubic' });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en" data-theme={theme} />
      </Helmet>

      <a href="#main-content" className="skip-link">Skip to main content</a>

      <Loader visible={loading} />
      <MeshBackground />
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      <ToastContainer position="bottom-right" theme={theme} newestOnTop />
    </>
  );
}
