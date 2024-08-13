import React from "react";
import WelcomeHeader, {
  WelcomeDescription,
  WelcomeSpan,
} from "./style/WelcomeHeaderStyle";

const Header = () => {
  return (
    <WelcomeHeader>
      <h1>
        Unleash Culinary Magic with <WelcomeSpan>CooxBox</WelcomeSpan>
      </h1>
      <WelcomeDescription>
        Embark on a culinary adventure with CooxBox! Discover a curated
        collection of recipes, from quick weeknight dinners to gourmet feasts,
        and transform your cooking into an extraordinary experience.{" "}
        <WelcomeSpan>Let's make every meal a masterpiece.</WelcomeSpan>
      </WelcomeDescription>
    </WelcomeHeader>
  );
};

export default Header;
