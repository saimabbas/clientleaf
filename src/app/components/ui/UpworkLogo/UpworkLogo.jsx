import Upwork from "../../../../../public/assets/svgs/Upwork";
import styles from "./Upworklogo.module.scss";

export default function UpworkLogo() {
  return (
    <span className={`flexCenter ${styles.span}`}>
      <Upwork />
    </span>
  );
}
