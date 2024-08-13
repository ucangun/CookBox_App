import AboutContainer, {
  AboutDescription,
  AboutDescriptionBody,
  AboutDescriptionTitle,
  ChefImage,
} from "./style/AboutBoxStyle";
import Chef from "../assets/images/Chef.jpg";

const AboutBox = () => {
  return (
    <AboutContainer>
      <ChefImage src={Chef} alt="The Chef" />
      <AboutDescription>
        <AboutDescriptionTitle>
          The Culinary Creations of Chef Marco Fontaine
        </AboutDescriptionTitle>
        <AboutDescriptionBody>
          Welcome to CooxBox, where the culinary brilliance of{" "}
          <strong>Chef Marco Fontaine</strong> comes to life. With over 20 years
          of experience in the world’s top kitchens, Chef Fontaine has crafted a
          collection of his finest recipes, each one a testament to his passion
          for flavor and innovation. CooxBox offers you a chance to recreate
          Chef Fontaine's signature dishes, from quick everyday meals to gourmet
          experiences. Every recipe is designed to inspire, delight, and elevate
          your cooking skills. Join us and bring the artistry of Chef Fontaine's
          kitchen into your home.
        </AboutDescriptionBody>
      </AboutDescription>
    </AboutContainer>
  );
};

export default AboutBox;
