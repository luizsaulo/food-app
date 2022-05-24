import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function Settings() {
  const [theme, setTheme] = useState("light");
  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)",
  ]
  const [primaryColor, setPrimaryColor] = useState(0)
  return (
    <div>
      <div className="section d-block">
        <h2>Primary color</h2>
        <div className="options-container">
          <div className="option light">
            {theme === "light" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="option dark">
            {theme === "dark" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="section d-block">
        <h2>Preferred theme</h2>
        <div className="options-container">          
          {primaryColors.map((color, index) => (
            <div className="option light" style={{backgroundColor: color}}>
              { primaryColor == index && (
                <div className="check">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              ) }
            </div>          
          ))}            
        </div>
      </div>
    </div>
  );
}
