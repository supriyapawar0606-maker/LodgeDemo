import PageLoader from "./components/PageLoader.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import BookingWidget from "./components/BookingWidget.jsx";
import About from "./components/About.jsx";
import Facilities from "./components/Facilities.jsx";
import Rooms from "./components/Rooms.jsx";
import Nearby from "./components/Nearby.jsx";
import BookSection from "./components/BookSection.jsx";
import GalleryTestimonial from "./components/GalleryTestimonial.jsx";
import Footer from "./components/Footer.jsx";
import useScrollReveal from "./hooks/useScrollReveal.js";

export default function App() {
  useScrollReveal();

  return (
    <>
      <PageLoader />
      <Header />
      <Hero />
      <BookingWidget />
      <About />
      <Facilities />
      <Rooms />
      <Nearby />
      <BookSection />
      <GalleryTestimonial />
      <Footer />
    </>
  );
}
