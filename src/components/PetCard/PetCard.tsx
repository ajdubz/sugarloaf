import "./PetCard.css";
import placeholderData from "../../lib/placeholderData";

export interface PetCardProps {
  name?: string;
  image?: string;
}

export default function PetCard({
  name = placeholderData.petCard.name,
  image = placeholderData.petCard.image,
}: PetCardProps) {
  return (
    <div className="pet-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}
