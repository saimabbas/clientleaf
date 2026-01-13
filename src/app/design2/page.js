"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";

import styles from "./design2.module.scss";
import Logo2 from "../../../public/assets/svgs/Logo2";
import Lock from "../../../public/assets/svgs/Lock";
import gsap from "gsap";
import BrownBg from "../../../public/assets/svgs/BrownBg";

const page = () => {
  //animation
  const wordsRef = useRef(null);

  useEffect(() => {
    const words = wordsRef.current;
    const items = words.children;

    const itemHeight = items[0].offsetHeight;
    const totalItems = items.length - 1;

    gsap.set(words, { y: 0 });

    const tl = gsap.timeline({
      repeat: -1,
      ease: "power2.inOut",
    });

    for (let i = 1; i <= totalItems; i++) {
      tl.to(words, {
        y: -itemHeight * i,
        duration: 0.8,
      }).to({}, { duration: 1.7 });
    }

    tl.set(words, { y: 0 });

    return () => tl.kill();
  }, []);


  
const headers = [
  "Sent",
  "Viewed",
  "Replies",
  "Hires",
  "View Rate",
  "Reply Rate",
  "Connects",
];

const rows = [
  [20, 13, 10, 6, "75%", "97%", 200],
  [20, 13, 10, 6, "75%", "97%", 200],
  [20, 13, 10, 6, "75%", "97%", 200],
];
const stats = [
  {
    title: "Connects Spent",
    value: "435",
    percent: "+75%",
    positive: true,
  },
  {
    title: "No. of Interviews",
    value: "280",
    percent: "+145%",
    positive: true,
  },
  {
    title: "View Rate",
    value: "38%",
    percent: "+75%",
    positive: true,
  },
  {
    title: "Client Acquisition Cost",
    value: "$25",
    percent: "-66%",
    positive: false,
  },
];

 const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <main className={styles.hero}>
      <section className={styles.heroInner}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.reportTable}>
            <h3>Daily Performance Report</h3>

            <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((head, index) => (
              <th key={head}
  className={index === 0 ? styles.colOne : undefined}>{head}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}  className={j === 0 ? styles.colOne : undefined}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </div>

            <section className={styles.wrapper}>
      <div className={styles.grid}>
        {stats.map((item, index) => (
          <div
            key={index}
            className={`${styles.leftCard} ${mounted ? styles.show : ""}`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <p className={styles.title}>{item.title}</p>

            <div className={styles.row}>
              <h2 className={styles.value}>{item.value}</h2>

              <span
                className={`${styles.percent} ${
                  item.positive ? styles.green : styles.red
                }`}
              >
                {item.percent}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>



          {/* <img src="/assets/images/temp1.png" className={styles.tempImage}></img> */}
          <img src="/assets/images/temp3.png" className={styles.temp3}></img>

          <p className={styles.gradientText}>
            Sick of{" "}
            <span className={styles.wordWrapper}>
              <span className={styles.words} ref={wordsRef}>
                <span className={styles.problem}>
                  Quality or Quantity Paradox,
                </span>
                <span className={styles.problem}>Endless Revisions,</span>
                <span className={styles.problem}>Missed Deadlines,</span>
                <span className={styles.problem}>
                  Quality or Quantity Paradox,
                </span>
              </span>
            </span>
            <br></br>
            and a million more problems? We were too!
            <br></br>
            And that’s why we built{" "}
            <span className={styles.brownGrad}> ClientLeaf™</span>
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className={styles.card}>
          
   <div className={styles.brownbg}><BrownBg /></div>
         
          <div className={styles.logo}>
            <Logo2 />
          </div>

          <h1>
            ClientLeaf™ puts you ahead
            <br />
            of 95% of UpWorkers.
          </h1>

          <div className={styles.avatars}>
            <img
              src="/assets/images/profiles.png"
              width={120}
              height={40}
              alt="profiles"
            />

            <span>+23 More Already Joined</span>
          </div>

          <button className={`${styles.cta} ${styles.brownbtn}`}>
            <Lock fill="#ffffffe3" /> Request Early Access
          </button>

          <small className={styles.footer}>
            © 2026 ClientLeaf. All rights reserved.
          </small>
        </div>
      </section>
    </main>
  );
};

export default page;
