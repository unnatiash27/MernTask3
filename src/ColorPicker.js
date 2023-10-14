import React, { useState } from "react";

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isListVisible, setIsListVisible] = useState(false);
  const [hoveredColor, setHoveredColor] = useState(null);

  const handleButtonClick = () => {
    setIsListVisible(!isListVisible);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsListVisible(false);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        style={{ textAlign: "center", width: "100%" }}
      >
        Pick a color
      </button>
      {isListVisible && (
        <ul className="color-picker-list" style={{ textAlign: "center" }}>
          {colors.map((color, index) => (
            <li
              key={color}
              className="color-picker-item"
              style={{
                backgroundColor: color,
                listStyle: 'none',
                width: "20px", // Adjust the width as needed
                height: "20px", // Adjust the height as needed
                display: "inline-block",
                margin: "3px", // Add some spacing between color squares
                position: "relative", // Added for positioning the text
              }}
              onClick={() => handleColorSelect(color)}
              onMouseEnter={() => setHoveredColor(color)}
              onMouseLeave={() => setHoveredColor(null)}
            >
              {hoveredColor === color && (
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    color: "white",
                    padding: "2px 4px",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    borderRadius: "4px",
                    fontSize: "12px",
                  }}
                >
                  {color}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
      <div className="selected-color-preview" style={{ backgroundColor: selectedColor }}>
        {selectedColor}
      </div>
    </div>
  );
};

export default ColorPicker;
