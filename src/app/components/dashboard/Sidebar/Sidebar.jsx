"use client";

import { usePathname, useRouter } from "next/navigation";
import SidebarBottomBg from "../../../../../public/assets/svgs/SidebarBottomBg";
import SidebarTopBg from "../../../../../public/assets/svgs/SidebarTopBg";
import { iconMap } from "../Icons";
import styles from "./Sidebar.module.css";
import { navItems } from "@/app/config/navigation";
import Link from "next/link";
import DownArrow from "../../../../../public/assets/svgs/DownArrow";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [expandedCategories, setExpandedCategories] = useState(() => {
    const initialState = {};
    navItems.forEach((category) => {
      initialState[category.category] = false;
    });
    return initialState;
  });

  const handleNavigation = (path) => {
    router.push(path);
  };

  const isActive = (path) => {
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <div className={`${styles.sidebar} flexCol flexJustifyStart`}>
      <div className={`${styles.Bg} ${styles.top}`}>
        <SidebarTopBg />
      </div>
      <div className={`${styles.Bg} ${styles.bottom}`}>
        <SidebarBottomBg />
      </div>

      <div className={`${styles.topContainer} flexCol`}>
        <h1>ClientLeaf™</h1>

        <div className={`${styles.navContainer} flexCol`}>
          {navItems.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`${styles.navCategory} flexCol`}
            >
              <div
                className={`${styles.category} flexJustify`}
                onClick={() => toggleCategory(category.category)}
              >
                <p className={`p1Bold  ${expandedCategories[category.category] ? styles.expandedText : ""}`}>{category.category}</p>
                <div
                  className={`${styles.arrowIcon} ${
                    expandedCategories[category.category] ? styles.expanded : ""
                  }`}
                >
                  <DownArrow />
                </div>
              </div>

              <div
                className={`${styles.categoryItems} ${
                  expandedCategories[category.category] ? styles.expanded : ""
                } flexCol`}
              >
                {category.items.map((item, itemIndex) => {
                  const IconComponent = iconMap[item.icon];
                  const active = isActive(item.path);

                  return (
                    <Link
                      key={`${categoryIndex}-${itemIndex}`}
                      href={item.path}
                      className={`${styles.navItem} flexRow ${
                        active ? styles.active : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.path);
                      }}
                    >
                      {IconComponent && <IconComponent />}
                      <h6 className="h6">{item.name}</h6>
                      {active && <div className={styles.activeIndicator}></div>}
                    </Link>
                  );
                })}
              </div>

              {categoryIndex < navItems.length - 1 && (
                <div className="divider"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* <div className={`${styles.bottomWrapper} flexRow`}>
        <div className={styles.container}></div>
      </div> */}
    </div>
  );
}
