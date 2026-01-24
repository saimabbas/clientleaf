"use client";

import { useState, useRef, useEffect } from "react";
import DownArrow from "../../../../../../../public/assets/svgs/DownArrow";
import styles from "./Selector.module.scss";
import USAFlag from "../../../../../../../public/assets/svgs/USAFlag";

export default function Selector({
  placeholder,
  options = [],
  onSelect,
  leftIcon = null,
  disabled = false,
  error= "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className={`${styles.inputSelectorContainer}`} ref={dropdownRef}>
      <div
        className={`${styles.inputSelector} flexRow ${isOpen ? styles.open : ""} ${disabled ? styles.disabled : ""}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className={`${styles.left} flexRow`}>
          {leftIcon && <span className="flexCenter">{leftIcon}</span>}
          <input
            type="text"
            placeholder={placeholder}
            className="font-quicksand h6"
            value={selectedOption?.label || ""}
            readOnly
            disabled= {disabled}
          />
        </div>

        <div className={`${styles.arrow} ${isOpen ? styles.rotated : ""}`}>
          <DownArrow />
        </div>
      </div>

      {error && <p className={styles.errorMessage}>{error}</p>}

      {!disabled && isOpen && options.length > 0 && (
        <div className={styles.dropdown}>
          {options.map((option, index) => (
            <div
              key={index}
              className={`${styles.option} ${
                selectedOption?.value === option.value ? styles.selected : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
