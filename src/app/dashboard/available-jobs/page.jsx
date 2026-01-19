import Link from "next/link";
import LinkIcon from "../../../../public/assets/svgs/LinkIcon";
import styles from "./page.module.scss";
import TopContainer from "./components/TopContainer/TopContainer";
import UpworkLogo from "../../../app/components/ui/UpworkLogo/UpworkLogo";
import Setting from "../../../../public/assets/svgs/Setting";
import Table from "./components/Table/Table";

export default function AvailableJobs() {
  return (
    <div className={`${styles.availableJobs} flexCol`}>
      <TopContainer />
      <Table />
    </div>
  );
}
