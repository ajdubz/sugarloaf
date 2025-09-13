import "./Testimonials.css";
import TestimonialForm from "@/pages/TestimonialForm";

interface TestimonialsProps {
  title: string;
}

export default function Testimonials({ title }: TestimonialsProps) {
  return (
    <section className="testimonials">
      <h2>{title}</h2>
      <TestimonialForm />
    </section>
  );
}

