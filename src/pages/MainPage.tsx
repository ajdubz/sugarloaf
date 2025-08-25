import Header from "../components/Header";
import Footer from "../components/Footer";
import PetCarousel from "../components/PetCarousel";
import TestimonialForm from "../components/TestimonialForm";
import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1>Sugarloaf Mountain Ranch, inc.</h1>
          <p>501c3 Non-Profit Farm Animal Rescue and Sanctuary</p>
        </div>
      </section>
      <PetCarousel />
      <section className="testimonials">
        <h2>Share your story</h2>
        <TestimonialForm />
      </section>
      <Footer />
    </>
  );
}
