import Sidebar from "@/app/components/dashboard/Sidebar/Sidebar";
import Header from "@/app/components/dashboard/Header/Header";
import styles from "./page.module.scss";

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />

      <div className={`${styles.mainContent} flexCol`}>
        <Header />

        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
