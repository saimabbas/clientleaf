import styles from "./Table.module.scss";

export default function Rating({ value }) {
  const getRatingClass = () => {
    switch (value) {
      case 5: return styles.five;
      case 4: return styles.four;
      case 3: return styles.three;
      case 2: return styles.two;
      case 1: return styles.one;
      default: return "";
    }
  };

  return (
    <div className={`${styles.ratingContainer} flexRow`}>
      <h6 className={`h6 highlight ${styles.rating} ${getRatingClass()}`}>
        {value}
      </h6>
    </div>
  );
}