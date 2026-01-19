import LinkIcon from "../../../../../../public/assets/svgs/LinkIcon";
import UpworkLogo from "../../../../../app/components/ui/UpworkLogo/UpworkLogo";
import Rating from "./Rating";
import PopupMenu from "./PopupMenu";
import styles from "./Table.module.scss";

export default function TableRow({
  jobTitle,
  budget,
  published,
  rating,
  onMoveToActive,
  onEdit,
  onDislike,
  onDiscard,
  onViewDetail,
  onOpenJob
}) {
  return (
    <div className={styles.gridContainer}>
      <div className={`${styles.jobTitle} flexRow`}>
        <UpworkLogo />
        <h6 className="h6 highlight">{jobTitle}</h6>
      </div>
      <h6 className="h6 highlight">{budget}</h6>
      <h6 className="h6 highlight">{published}</h6>
      <Rating value={rating} />
      <div className={`${styles.actions} flexRow`}>
        <button className="p1" onClick={onMoveToActive}>
          Move to Active Jobs
        </button>
        <span className="flexCenter">
          <LinkIcon />
        </span>
        <PopupMenu
          onEdit={onEdit}
          onDislike={onDislike}
          onDiscard={onDiscard}
          onViewDetail={onViewDetail}
          onOpenJob={onOpenJob}
        />
      </div>
    </div>
  );
}