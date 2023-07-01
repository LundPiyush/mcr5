import React from "react";

const AddModal = ({
  setShowAddModal,
  recpieFormData,
  setrecpieFormData,
  recipeData,
  setRecipeData,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setRecipeData([...recipeData, recpieFormData]);
    setrecpieFormData({});
    setShowAddModal(false);
  };
  return (
    <div className="profile-address-modal">
      <div className="address-modal">
        <h3>Edit Recepie</h3>
        <form
          className="address-profile-form"
          onSubmit={(e) => {
            submitHandler(e);
          }}>
          <label className="address-profile-label">
            <input
              required
              value={recpieFormData.name}
              onChange={(e) =>
                setrecpieFormData({ ...recpieFormData, name: e.target.value })
              }
              type="text"
              placeholder="Name"
            />
          </label>
          <label>
            <input
              required
              value={recpieFormData.cuisine}
              onChange={(e) =>
                setrecpieFormData({
                  ...recpieFormData,
                  cuisine: e.target.value,
                })
              }
              type="text"
              placeholder="Cuisine"
            />
          </label>
          <textarea
            placeholder="ingredients"
            value={recpieFormData.ingredients}
            onChange={(e) =>
              setrecpieFormData({
                ...recpieFormData,
                ingredients: e.target.value.split(","),
              })
            }></textarea>
          <textarea
            placeholder="instructions"
            value={recpieFormData.instructions}
            onChange={(e) =>
              setrecpieFormData({
                ...recpieFormData,
                instructions: e.target.value.split(","),
              })
            }></textarea>
          <input
            type="file"
            accept="/image*"
            onChange={(e) =>
              setrecpieFormData({
                ...recpieFormData,
                mediaUrl: URL.createObjectURL(e.target.files[0]),
              })
            }
          />
          <div className="address-modal-btns">
            <button className="btn-save">Save</button>
            <button
              type="button"
              className="btn-cancel"
              onClick={() => setShowAddModal(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
