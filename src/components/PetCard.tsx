import "./PetCard.css";

type PetCardProps = {
  name: string;
  image: string;
};

export default function PetCard({ name, image }: PetCardProps) {
  return (
    <div className="pet-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}
