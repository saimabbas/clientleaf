import styles from "./Table.module.scss";

export default function TableHeader() {
  return (
    <div className={`${styles.gridContainer} ${styles.header}`}>
      <p className="p1">Job Title</p>
      <p className="p1">Budget</p>
      <p className="p1">Published</p>
      <p className="p1">ClientLeaf Rating</p>
      <p className="p1">Actions</p>
    </div>
  );
}