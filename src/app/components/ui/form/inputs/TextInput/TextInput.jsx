import styles from "./TextInput.module.scss";

export default function TextInput({ placeholder, value = "", onChange, disabled = false }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${styles.textInput} ${disabled ? styles.disabled : ""}`}
      value={value}
      onChange={(e) => !disabled && onChange?.(e.target.value)}
      disabled={disabled}
    />
  );
}
