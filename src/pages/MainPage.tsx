import Header from "../components/Header";
import Footer from "../components/Footer";
import PetCard from "../components/PetCard";
import "./MainPage.css";

const heroUrl = "https://placekitten.com/1920/490";
const petImg = "https://placekitten.com/263/180";

export default function MainPage() {
  const pets = [
    { name: "Fluffy", image: petImg },
    { name: "Spot", image: petImg },
    { name: "Whiskers", image: petImg },
  ];

  return (
    <>
      <Header />
      <section className="hero" style={{ backgroundImage: `url(${heroUrl})` }}>
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
      <Footer />
    </>
  );
}
