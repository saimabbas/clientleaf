"use client";

import { useState } from "react";
import styles from "./Checkbox.module.scss";
import Tick from "../../../../../../../public/assets/svgs/Tick"; 

export default function Checkbox({ options = [] }) {
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleCheck = (value) => {
    setCheckedItems((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className={`${styles.checkboxContainer} flexRow flexWrap`}>
      {options.map((option) => {
        const isChecked = checkedItems.includes(option.value);
        
        return (
          <label key={option.value} className={`${styles.option} flexRow`}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => toggleCheck(option.value)}
            />

            <span
              className={`${styles.customCheckbox} ${
                isChecked ? styles.checked : ""
              }`}
              onClick={() => toggleCheck(option.value)}
            >
              {isChecked && <Tick />}
            </span>

            <h6 className="h6 highlight">{option.label}</h6>
          </label>
        );
      })}
    </div>
  );
}