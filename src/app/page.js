import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
     <Link href="/design1">Design 1</Link>
      <Link href="/design2">Design 2</Link>
       <Link href="/design3">Design 3</Link>
    </div>
  );
}
