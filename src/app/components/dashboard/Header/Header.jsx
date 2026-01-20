"use client";

import { usePathname } from "next/navigation";

import Notification from "../../../../../public/assets/svgs/Notification";
import SmileFilled from "../../../../../public/assets/svgs/SmileFilled";
import styles from "./Header.module.scss";
import { getHeaderTitle } from "@/app/utils/getHeaderTitle";

export default function Header() {
  const pathname = usePathname();
  const title = getHeaderTitle(pathname);

  return (
    <header className={`${styles.header} flexJustify`}>
      <div className={`${styles.module} flexRow`}>
        <SmileFilled />
        <h1 className="h1">{title}</h1>
      </div>
      <Notification />
    </header>
  );
}
