"use client";

import Link from "next/link";
import Warning from "../../../../../../public/assets/svgs/Warning";
import { useState } from "react";
import styles from "./topcontainer.module.scss";

export default function TopContainer() {

      const [activeFilter, setActiveFilter] = useState("React Web App Australia");

  const filterItems = [
    "All Active Jobs",
    "Websites US Region $1000",
    "React Native Germany",
    "React Web App Australia",
    "Redbull Scanner 1",
    "Redbull Scanner 2",
    "Redbull Scanner 3",
    "Redbull Scanner 4",
    "Redbull Scanner 5",
  ];

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
  };

    return (
        <div className={`${styles.topContainer} card flexCol`}>
        <div className={`${styles.warning} flexRow`}>
          <Warning />
          <h6 className="h6">
            A Scanner helps you apply pre-defined filters on Available Jobs. If
            you need to edit, delete, or add a new Scanner, go to the{" "}
            <Link href="#" className=" h6 highlight">
              Scanners Screen
            </Link>
          </h6>
        </div>
        <div className={`${styles.filters} flexRow`}>
          {filterItems.map((filterName, index) => (
            <div
              key={index}
              className={`${styles.filterItem} ${activeFilter === filterName ? styles.active : ""} flexCol`}
              onClick={() => handleFilterClick(filterName)}
            >
              <h6 className="h6">{filterName}</h6>
              <div className={`${styles.border}`}></div>
            </div>
          ))}
        </div>
      </div>
    )
}