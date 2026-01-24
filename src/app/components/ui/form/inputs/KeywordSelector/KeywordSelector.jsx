"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./KeywordSelector.module.scss";
import Cross from "../../../../../../../public/assets/svgs/Cross";

export default function KeywordSelector({
  placeholder,
  options = [],
  onSelect,
  disabled = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (disabled) return;

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [disabled]);

  const filteredOptions = options.filter(
    (option) =>
      option.label.toLowerCase().includes(search.toLowerCase()) &&
      !selectedKeywords.some((item) => item.value === option.value),
  );

  const handleSelect = (option) => {
    if (disabled) return;

    const updated = [...selectedKeywords, option];
    setSelectedKeywords(updated);
    setSearch("");
    setIsOpen(false);
    onSelect?.(updated);
  };

  const handleRemove = (value) => {
    if (disabled) return;

    const updated = selectedKeywords.filter((item) => item.value !== value);
    setSelectedKeywords(updated);
    onSelect?.(updated);
  };

  return (
    <div
      className={`${styles.inputSelectorContainer} flexCol ${disabled ? styles.disabled : ""}`}
      ref={dropdownRef}
    >
      {!disabled && (
        <div className={`${styles.inputSelector} flexRow`}>
          <input
            type="text"
            placeholder={placeholder}
            className="font-quicksand h6"
            value={search}
            disabled={disabled}
            onChange={(e) => {
              if (disabled) return;
              setSearch(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => !disabled && setIsOpen(true)}
          />
          {!disabled && isOpen && filteredOptions.length > 0 && (
            <div className={styles.dropdown}>
              {filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className={styles.option}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {disabled && (
        <div className={`${styles.keywordContainer} flexRow flexWrap`}>
          <div className={`${styles.keywordChip} flexCenter`}>
            <p className="p1 font-quicksand">React</p>
          </div>
          <div className={`${styles.keywordChip} flexCenter`}>
            <p className="p1 font-quicksand">Web Developer</p>
          </div>
          <div className={`${styles.keywordChip} flexCenter`}>
            <p className="p1 font-quicksand">Next.js Website</p>
          </div>
          <div className={`${styles.keywordChip} flexCenter`}>
            <p className="p1 font-quicksand">Website Designer</p>
          </div>
          <div className={`${styles.keywordChip} flexCenter`}>
            <p className="p1 font-quicksand">React.js Developer</p>
          </div>
        </div>
      )}

      {selectedKeywords.length > 0 && (
        <div className={`${styles.keywordContainer} flexRow flexWrap`}>
          {selectedKeywords.map((item) => (
            <div className={`${styles.keywordChip} flexCenter`}>
              <p className="p1 font-quicksand">{item.label}</p>
              {!disabled && (
                <span
                  className={`${styles.crossIcon} flexCenter`}
                  onClick={() => handleRemove(item.value)}
                >
                  <Cross />
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
