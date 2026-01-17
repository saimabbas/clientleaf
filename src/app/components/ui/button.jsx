export default function Button() {
  return (
    <button className={`${styles.transparentBtn} h6 highlight`}>
      <div className={`${styles.btnGradient}`}>
        <ButtonGradient />
      </div>
      Move to Active Jobs
    </button>
  );
}
