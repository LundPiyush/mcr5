import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { recipes } from "../data";
import { Link } from "react-router-dom";
const RecipeDetails = () => {
  const { cuisine } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const data = recipes.find((item) => item?.cuisine === cuisine);
    setRecipe(data);
  }, [cuisine]);
  if (recipe === {}) {
    return <p>loading....</p>;
  }
  return (
    <div>
      <h1> {cuisine}</h1>
      <div className="recipe-card">
        <img
          src={recipe?.mediaUrl}
          height={200}
          width={200}
          alt={recipe?.name}
        />
        <div className="details-card">
          <h2>Cuisine - {cuisine}</h2>
          <h3>Ingredients : {recipe?.ingredients?.join(",")}</h3>
          <h3>Instructions -{recipe?.instructions?.join(",")}</h3>
        </div>
      </div>
      <Link to="/">Back</Link>
    </div>
  );
};

export default RecipeDetails;
