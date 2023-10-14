import { useState } from "react";
import ColorPicker from "./ColorPicker";

const colors = [
  "red",
  "green",
  "blue",
  "#f00",
  "#0f0",
  "#00f",
  "#ffee00",
  "#ffff00",
  "#f0f8ff",
  "#f8f8ff",
  "#ffcc00",
  "#ffa500",
  "#ffa07a",
  "#f08080",
  "#ffc0cb",
  "#ffb6c1",
  "#ffa07a",
  "#ff66cc",
  "#ee82ee",
  "#da70d6",
  "#d8bfd8",
  "#9400d3",
  "#000080",
  "#0000ff",
  "#00ced1",
  "#48d1cc",
  "#008000",
  "#00ff00",
  "#7fff00",
  "#00ced1",
  "#a52a2a",
  "#800000",
  "#654321",
  "#9400d3",
  "#00ffff",
  "#ff00ff",
  "#4b0082",
  "#ffbf00",
  "#e2725b",
  "#635147",
  "#40e0d0",
  "#007fff",
  "#000080",
  "ffc800",
  "e6e6fa",
  "c8a2c8",
  "9b30ff"
];


function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div>
      <h1 style={{ textAlign:"center"}}>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
