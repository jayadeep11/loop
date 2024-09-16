import { Link } from "react-router-dom";
import HeroCards from "./HeroCards";
import { cardContent } from "./constant";
import Title from "./Title";

const Hero = () => {
  return (
    <div className="hero flex flex-col items-center w-full mt-52">

    <Title />
      <HeroCards content={cardContent.card1} />
      <HeroCards content={cardContent.card2} rightBig={true} />
    </div>
  );
};

export default Hero;
