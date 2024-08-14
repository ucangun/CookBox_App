import React from "react";
import DetailsContainer, {
  IngBody,
  IngDetails,
  IngImage,
  IngInfo,
  IngNutri,
  IngSpan,
  IngSpanWrapper,
} from "./style/DetailsBoxStyle";
import { VscFlame } from "react-icons/vsc";
import { DetailButton } from "./style/ButtonStyle";

const DetailBox = ({ item }) => {
  const labels =
    item.recipe.dietLabels.length > 0 ? item.recipe.dietLabels : ["Balanced"];

  return (
    <DetailsContainer>
      <IngInfo>
        <IngImage src={item.recipe.image} alt="food" />
        <IngSpanWrapper>
          {labels.map((label, i) => (
            <IngSpan key={i} index={i}>
              {label}
            </IngSpan>
          ))}
          <VscFlame style={{ fontSize: "1.2rem", marginLeft: ".8rem" }} />
          <span style={{ marginLeft: "-.5rem" }}>
            {item.recipe.calories.toFixed(1)} kcal{" "}
          </span>
        </IngSpanWrapper>
        <DetailButton href={item.recipe.shareAs} target="blank">
          More Details &rarr;
        </DetailButton>
      </IngInfo>

      <IngDetails>
        <IngBody>
          <h3 style={{ marginBottom: "1rem" }}>Ingredients</h3>
          {item.recipe.ingredientLines.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </IngBody>
        <IngNutri>
          <h3 style={{ marginBottom: "1rem" }}>Nutrients</h3>
          {Object.values(item.recipe.totalNutrients)
            .slice(0, 10)
            .map((value) => (
              <li>
                {value.label}:{" "}
                <strong>
                  {value.quantity.toFixed(1)} {value.unit}
                </strong>
              </li>
            ))}
        </IngNutri>
      </IngDetails>
    </DetailsContainer>
  );
};

export default DetailBox;
