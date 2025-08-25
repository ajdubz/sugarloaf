import Header from "../components/Header";
import Footer from "../components/Footer";
import PetCarousel from "../components/PetCarousel/PetCarousel";
import TestimonialForm from "../components/TestimonialForm";
import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Pet Rescue</h1>
          <p>Find your new best friend today.</p>
        </div>
      </section>
      <section className="testimonials">
        <h2>Share your story</h2>
        <TestimonialForm />
      </section>
      <PetCarousel />
      <Footer />
    </>
  );
}
