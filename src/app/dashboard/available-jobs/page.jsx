import Link from "next/link";
import styles from "./page.module.scss";
import TopContainer from "./components/TopContainer/TopContainer";
import Table from "./components/Table/Table";

export default function AvailableJobs() {
  return (
    <div className={`${styles.availableJobs} flexCol`}>
      <TopContainer />
      <Table />
    </div>
  );
}
