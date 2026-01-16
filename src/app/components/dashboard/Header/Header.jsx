import Notification from "../../../../../public/assets/svgs/Notification";
import SmileFilled from "../../../../../public/assets/svgs/SmileFilled";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={`${styles.header} flexJustify`}>
            <div className={`${styles.module} flexRow`}>
                <SmileFilled />
                <h1 className="h1">Active Jobs</h1>
            </div>
            <Notification />
        </header>
    )
}