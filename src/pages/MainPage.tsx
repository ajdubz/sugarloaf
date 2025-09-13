import Layout from "../components/Layout";
import PetCarousel from "../components/PetCarousel";
import Testimonials from "../components/Testimonials";
import "./MainPage.css";

export default function MainPage() {
  return (
    <Layout title="Sugarloaf Mountain Ranch, inc.">
      <section className="hero">
        <div className="hero-content">
          <h1>Sugarloaf Mountain Ranch, inc.</h1>
          <p>501c3 Non-Profit Farm Animal Rescue and Sanctuary</p>
        </div>
      </section>
      <PetCarousel />
      <Testimonials title="Share your story" />
    </Layout>
  );
}

