import ScannerForm from "./components/ScannerForm/ScannerForm";
import TopContainer from "./components/TopContainer/TopContainer";
import styles from "./page.module.scss";

export default function Scanner() {
    return (
        <div className={`${styles.scanner} flexCol`}>
            <TopContainer />
            <ScannerForm />
        </div>
    )
}