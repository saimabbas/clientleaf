import Warning from "../../../../../../public/assets/svgs/Warning";
import styles from "./Topcontainer.module.scss";

export default function TopContainer() {
  return (
    <div className={`${styles.topContainer} card`}>
      <div className={`${styles.information} flexRow`}>
        <span className={`${styles.icon} flexCenter`}>
            <Warning />
        </span>
        <h6 className="h6">
          A Scanner helps you apply pre-defined filters and then you can use
          those filters i.e. Scanners on Available Jobs to further polish the
          quality of job posts visible to you. You can always edit, delete, or
          add a new Scanner. You can add as many Scanners as you need.
        </h6>
      </div>
    </div>
  );
}
