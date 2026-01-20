import styles from "./TextInput.module.scss";

export default function TextInput({placeholder}) {
    return (
        <input
        type="text"
        placeholder={placeholder}
        className={styles.textInput}
        />
    )
}