"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./KeywordSelector.module.scss";
import Cross from "../../../../../../../public/assets/svgs/Cross";

export default function KeywordSelector({
  placeholder,
  options = [],
  onSelect,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState([]);
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

  const filteredOptions = options.filter(
    (option) =>
      option.label.toLowerCase().includes(search.toLowerCase()) &&
      !selectedKeywords.some((item) => item.value === option.value),
  );

  const handleSelect = (option) => {
    const updated = [...selectedKeywords, option];
    setSelectedKeywords(updated);
    setSearch("");
    setIsOpen(false);
    onSelect?.(updated);
  };

  const handleRemove = (value) => {
    const updated = selectedKeywords.filter((item) => item.value !== value);
    setSelectedKeywords(updated);
    onSelect?.(updated);
  };

  return (
    <div
      className={`${styles.inputSelectorContainer} flexCol`}
      ref={dropdownRef}
    >
      <div className={`${styles.inputSelector} flexRow`}>
        <input
          type="text"
          placeholder={placeholder}
          className="font-quicksand h6"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        {isOpen && filteredOptions.length > 0 && (
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

      {selectedKeywords.length > 0 && (
        <div className={`${styles.keywordContainer} flexRow flexWrap`}>
          {selectedKeywords.map((item) => (
            <div className={`${styles.keywordChip} flexCenter`}>
              <p className="p1 font-quicksand">{item.label}</p>
              <span
                className={`${styles.crossIcon} flexCenter`}
                onClick={() => handleRemove(item.value)}
              >
                <Cross />
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
