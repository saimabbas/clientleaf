"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";
import Logo2 from "../../public/assets/svgs/Logo2";
import Lock from "../../public/assets/svgs/Lock";
import gsap from "gsap";
import BrownBg from "../../public/assets/svgs/BrownBg";
import Customers from "../../public/assets/images/customers.png";
import Image from "next/image";

const page = () => {
  //animation
  const wordsRef = useRef(null);

  useEffect(() => {
    const words = wordsRef.current;
    const items = words.children;

    // const itemHeight = items[0].offsetHeight;
    const itemHeight = items[0].getBoundingClientRect().height;

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

  // Initial data
  const initialRows = [
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
    [20, 13, 10, 6, "75%", "97%", 200],
  ];

  // Target values for smooth updates
  const targetRows = [
    [45, 28, 18, 12, "82%", "94%", 320],
    [38, 22, 15, 9, "79%", "91%", 280],
    [42, 25, 16, 11, "81%", "93%", 310],
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
      positive: true,
    },
  ];

  const [mounted, setMounted] = useState(false);
  const [rows, setRows] = useState(initialRows);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef(null);

  // Function to animate number values
  const animateValue = (start, end, duration, setter, rowIndex, colIndex) => {
    const startTime = performance.now();
    const startValue =
      typeof start === "string" ? parseInt(start.replace("%", "")) : start;
    const endValue =
      typeof end === "string" ? parseInt(end.replace("%", "")) : end;
    const isPercentage = typeof start === "string" && start.includes("%");

    const updateValue = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const currentValue = startValue + (endValue - startValue) * easeOutQuart;

      setter((prev) => {
        const newRows = [...prev];
        const formattedValue = isPercentage
          ? `${Math.round(currentValue)}%`
          : Math.round(currentValue);
        newRows[rowIndex][colIndex] = formattedValue;
        return newRows;
      });

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(updateValue);
      } else {
        // After reaching target, start reverse animation
        setTimeout(() => {
          animateValue(end, start, duration, setter, rowIndex, colIndex);
        }, 2000); // Wait 2 seconds before reversing
      }
    };

    animationRef.current = requestAnimationFrame(updateValue);
  };

  return (
    <main className={styles.hero}>
      <section className={styles.heroInner}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.overlayLayer}></div>
          <div className={styles.reportTable}>
            <h3>Daily Performance Report</h3>

            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    {headers.map((head, index) => (
                      <th
                        key={head}
                        className={index === 0 ? styles.colOne : undefined}
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={j === 0 ? styles.colOne : undefined}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <img
            src="/assets/images/ClientLeaf-lottie.png"
            className={styles.temp3}
          ></img>

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
            and a million more problems?
            <br></br>
            We were too!
            <br></br>
            And that’s why we built{" "}
            <span className={styles.brownGrad}> ClientLeaf™</span>
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className={styles.card}>
          <div className={styles.brownbg}>
            <BrownBg />
          </div>

          <div className={styles.logo}>
            <Logo2 />
          </div>

          <h1>
            ClientLeaf™ puts you ahead
            <br />
            {""} of 95% of UpWorkers.
          </h1>

          <div className={styles.avatars}>
            <Image src={Customers} width={120} height={40} alt="profiles" />

            <span>+23 More Already Joined</span>
          </div>

          <button
            className={`${styles.cta} ${styles.brownbtn}`}
            onClick={() =>
              window.open(
                "https://forms.clickup.com/36179363/f/12g3d3-5838/CDYNB7UKBCG90MHXWW",
                "_blank"
              )
            }
          >
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
