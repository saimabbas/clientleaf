import { useState, useRef, useEffect } from "react";
import LinkIcon from "../../../../../../public/assets/svgs/LinkIcon";
import Like from "../../../../../../public/assets/svgs/Like";
import Dislike from "../../../../../../public/assets/svgs/Dislike";
import Slash from "../../../../../../public/assets/svgs/Slash";
import Eye from "../../../../../../public/assets/svgs/Eye";
import styles from "./Table.module.scss";
import SettingV4 from "../../../../../../public/assets/svgs/Setting-v4";

export default function PopupMenu({
  onEdit,
  onDislike,
  onDiscard,
  onViewDetail,
  onOpenJob,
}) {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAction = (callback) => {
    setShowPopup(false);
    callback?.();
  };

  return (
    <div className={styles.dotsContainer} ref={popupRef}>
      <span className="flexCol" onClick={togglePopup}>
        <SettingV4 />
      </span>

      {showPopup && (
        <div className={`${styles.popup} flexCol`}>
          <div
            className={`${styles.popupItem} flexRow`}
            onClick={() => handleAction(onEdit)}
          >
            <Like />
            <span className="p1">Edit</span>
          </div>

          <div
            className={`${styles.popupItem} flexRow`}
            onClick={() => handleAction(onDislike)}
          >
            <Dislike />
            <span className="p1">Dislike</span>
          </div>

          <div
            className={`${styles.popupItem} flexRow`}
            onClick={() => handleAction(onDiscard)}
          >
            <Slash />
            <span className="p1">Discard</span>
          </div>

          <div
            className={`${styles.popupItem} flexRow`}
            onClick={() => handleAction(onViewDetail)}
          >
            <Eye />
            <span className="p1">View in Detail</span>
          </div>

          <div
            className={`${styles.popupItem} flexRow`}
            onClick={() => handleAction(onOpenJob)}
          >
            <LinkIcon />
            <span className="p1">Open Job on Upwork</span>
          </div>
        </div>
      )}
    </div>
  );
}
