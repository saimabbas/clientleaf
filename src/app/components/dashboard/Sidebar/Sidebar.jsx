import KnowledgeBase from "@/app/dashboard/knowledge-base/page";
import Home from "../../../../../public/assets/svgs/Home";
import Note from "../../../../../public/assets/svgs/Note";
import Setting from "../../../../../public/assets/svgs/Setting";
import SidebarBottomBg from "../../../../../public/assets/svgs/SidebarBottomBg";
import SidebarTopBg from "../../../../../public/assets/svgs/SidebarTopBg";
import Smile from "../../../../../public/assets/svgs/Smile";
import styles from "./Sidebar.module.css";
import Proposal from "../../../../../public/assets/svgs/Proposal";
import Template from "../../../../../public/assets/svgs/Template";
import Sun from "../../../../../public/assets/svgs/Sun";

export default function Sidebar() {
  return (
    <div className={`${styles.sidebar} flexCol`}>
      <div className={`${styles.Bg} ${styles.top}`}>
        <SidebarTopBg />
      </div>
      <div className={`${styles.Bg} ${styles.bottom}`}>
        <SidebarBottomBg />
      </div>
      <h1>ClientLeaf™</h1>
      <div className={`${styles.navContainer} flexCol`}>
        <div className={`${styles.navCategory} flexCol`}>
          <p className="p1Bold">Home</p>
          <div className={`${styles.navItem} flexRow`}>
            <Home/>
            <h6 className="h6">Analytics</h6>
          </div>
        </div>
        <div className="divider"></div>
         <div className={`${styles.navCategory} flexCol`}>
          <p className="p1Bold">JOBS</p>
          <div className={`${styles.navItem} flexRow`}>
            <Smile/>
            <h6 className="h6">Active Jobs</h6>
          </div>
          <div className={`${styles.navItem} flexRow`}>
            <Smile/>
            <h6 className="h6">Available Jobs</h6>
          </div>
          <div className={`${styles.navItem} flexRow`}>
            <Note/>
            <h6 className="h6">Backlog</h6>
          </div>
        </div>
        <div className="divider"></div>
          <div className={`${styles.navCategory} flexCol`}>
          <p className="p1Bold">PROPOSALS</p>
          <div className={`${styles.navItem} flexRow`}>
            <Proposal/>
            <h6 className="h6">Active Proposals</h6>
          </div>
          <div className={`${styles.navItem} flexRow`}>
            <Template/>
            <h6 className="h6">Templates</h6>
          </div>
          <div className={`${styles.navItem} flexRow`}>
            <Note/>
            <h6 className="h6">Backlog</h6>
          </div>
        </div>
        <div className="divider"></div>
         <div className={`${styles.navCategory} flexCol`}>
          <p className="p1Bold">SETTIINGS</p>
          <div className={`${styles.navItem} flexRow`}>
            <Setting/>
            <h6 className="h6">Account Settings</h6>
          </div>
          <div className={`${styles.navItem} flexRow`}>
            <Sun/>
            <h6 className="h6">Knowledge Base</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
