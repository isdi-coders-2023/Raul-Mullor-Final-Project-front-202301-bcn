import { useEffect } from "react";
import Button from "../../components/Button/Button";
import CardList from "../../components/CardList/CardList";
import useCharacters from "../../hooks/useCharacters/useCharacters";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const { getCharacters } = useCharacters();

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return (
    <HomePageStyled>
      <h2>your characters</h2>
      <CardList />
      <Button text={"Show More"} />
      <h3>Create New Character</h3>
    </HomePageStyled>
  );
};

export default HomePage;
