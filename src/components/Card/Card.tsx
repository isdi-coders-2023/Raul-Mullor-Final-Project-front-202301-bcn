import { CharacterDataStructure } from "../../types/characters/types";
import CardStyled from "./CardStyled";

interface CardProps {
  character: CharacterDataStructure;
}

const Card = ({
  character: {
    age,
    alignment,
    pathfinderclass,
    gender,
    height,
    image,
    name,
    race,
    weight,
  },
}: CardProps): JSX.Element => {
  return (
    <CardStyled className="card">
      <img
        src={image}
        alt={name}
        width={95}
        height={168}
        className="card__image"
      />
      <ul>
        <li>
          <h2 className="card__tittle">{name}</h2>
        </li>
        <li>{race}</li>
        <li>{pathfinderclass}</li>
      </ul>
    </CardStyled>
  );
};

export default Card;
