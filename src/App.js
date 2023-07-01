import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:cuisine" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
