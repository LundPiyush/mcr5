import React, { useEffect, useState } from "react";
import { recipes } from "../data";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditModal from "./EditModal";
import AddModal from "./AddModal";

const Home = () => {
  const [recipeData, setRecipeData] = useState(recipes);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [recpieFormData, setrecpieFormData] = useState({});
  const deleteHandler = (id) => {
    const filteredData = recipeData?.filter((item) => item?.id !== id);
    setRecipeData(filteredData);
  };
  const editHandler = (id) => {
    const editRecpie = recipeData.find((item) => item?.id === id);
    setrecpieFormData({ ...editRecpie });
    setShowModal(true);
  };
  const addHandler = () => {
    setShowAddModal(true);
  };
  useEffect(() => {
    localStorage.setItem("data", recipeData);
  }, [recipeData]);

  return (
    <div>
      {showAddModal ? (
        <AddModal
          setShowAddModal={setShowAddModal}
          recpieFormData={recpieFormData}
          setrecpieFormData={setrecpieFormData}
          recipeData={recipeData}
          setRecipeData={setRecipeData}
        />
      ) : null}
      {showModal ? (
        <EditModal
          setShowModal={setShowModal}
          recpieFormData={recpieFormData}
          setrecpieFormData={setrecpieFormData}
          recipeData={recipeData}
          setRecipeData={setRecipeData}
        />
      ) : null}
      <div className="nav-bar">
        <input type="text" className="search-input" />
        <h4>Filters:</h4>
        <div className="radio-group">
          <label>
            <input type="radio" name="filter-radio" />
            Name
          </label>
          <label>
            <input type="radio" name="filter-radio" />
            Ingredients
          </label>
          <label>
            <input type="radio" name="filter-radio" />
            Cuisine
          </label>
        </div>
      </div>
      <div className="cards">
        {recipeData.map((recipe) => (
          <div className="card" key={recipe?.name}>
            <EditIcon
              className="edit-icon"
              onClick={() => editHandler(recipe?.id)}
            />
            <DeleteIcon
              className="delete-icon"
              onClick={() => deleteHandler(recipe?.id)}
            />
            <img src={recipe?.mediaUrl} alt={recipe?.name} />
            <p>{recipe.name}</p>
            <p>
              <strong>Cuisine</strong> {recipe.cuisine}
            </p>
            <p>
              <strong>Ingredients -</strong>
              <Link to={`/recipe/${recipe.cuisine}`}> See Recipe</Link>
            </p>
            <p>
              <strong>Instructions -</strong>
              <Link to={`/recipe/${recipe.cuisine}`}>See Recipe</Link>
            </p>
          </div>
        ))}
      </div>
      <button onClick={addHandler}>Add new Recepie</button>
    </div>
  );
};

export default Home;
