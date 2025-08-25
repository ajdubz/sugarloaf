import Header from "../components/Header";
import Footer from "../components/Footer";
import PetCard from "../components/PetCard";
import TestimonialForm from "../components/TestimonialForm";
import "./MainPage.css";
import pet1 from "../assets/placeholders/263x180_pet1.jpg";
import pet2 from "../assets/placeholders/263x180_pet2.jpg";
import pet3 from "../assets/placeholders/263x180_pet3.jpg";

export default function MainPage() {
  const pets = [
    { name: "Fluffy", image: pet1 },
    { name: "Spot", image: pet2 },
    { name: "Whiskers", image: pet3 },
  ];

  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Pet Rescue</h1>
          <p>Find your new best friend today.</p>
        </div>
      </section>
      <section className="pets">
        {pets.map((pet) => (
          <PetCard key={pet.name} {...pet} />
        ))}
      </section>
      <section className="testimonials">
        <h2>Share your story</h2>
        <TestimonialForm />
      </section>
      <Footer />
    </>
  );
}
