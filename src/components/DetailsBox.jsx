import React from "react";
import DetailsContainer, {
  IngBody,
  IngContainer,
  IngImage,
  IngSpan,
  IngSpanWrapper,
} from "./style/DetailsBoxStyle";

const DetailBox = ({ item }) => {
  const labels =
    item.recipe.dietLabels.length > 0 ? item.recipe.dietLabels : ["Balanced"];

  return (
    <DetailsContainer>
      <IngContainer>
        <div>
          <IngImage src={item.recipe.image} alt="food" />
          <IngSpanWrapper>
            {labels.map((label, i) => (
              <IngSpan key={i} index={i}>
                {label}
              </IngSpan>
            ))}
          </IngSpanWrapper>
        </div>

        <IngBody>
          <h3 style={{ marginBottom: "1rem" }}>Ingredients</h3>
          {item.recipe.ingredientLines.map((ing, i) => (
            <p key={i}>{ing}</p>
          ))}
        </IngBody>
      </IngContainer>
    </DetailsContainer>
  );
};

export default DetailBox;
