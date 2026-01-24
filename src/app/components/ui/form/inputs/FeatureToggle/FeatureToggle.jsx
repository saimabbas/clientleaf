"use client";

import { useState } from "react";
import styles from "./FeatureToggle.module.scss";
import Tick from "../../../../../../../public/assets/svgs/Tick";
import Cross from "../../../../../../../public/assets/svgs/Cross";

export default function FeatureToggle({ disabled = false }) {
  const [isIncluded, setIsIncluded] = useState(true);

  const handleToggle = () => {
    if (disabled) return;
    setIsIncluded((prev) => !prev);
  };

  return (
    <label className={`${styles.option} flexRow ${disabled ? styles.disabled : ""}`}>
      <input
        type="checkbox"
        checked={isIncluded}
        onChange={handleToggle}
        disabled={disabled}
        readOnly
      />

      <span
        className={`${styles.customCheckbox} ${
          isIncluded ? styles.checked : styles.excluded
        }`}
        onClick={handleToggle}
      >
        {isIncluded ? <Tick /> : <Cross />}
      </span>

      <h6 className="h6 highlight">{isIncluded ? "Included" : "Excluded"}</h6>
    </label>
  );
}
