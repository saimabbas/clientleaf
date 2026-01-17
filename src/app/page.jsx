"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react"; 
import styles from "./page.module.scss";
import Logo2 from "../../public/assets/svgs/Logo2";
import Lock from "../../public/assets/svgs/Lock";
import gsap from "gsap";
import BrownBg from "../../public/assets/svgs/BrownBg";
import Customers from "../../public/assets/images/customers.png";
import ClientLeafAnimation from "../../public/assets/ClientLeafAnimation.json";
import final from "../../public/assets/final.json";
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

  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={styles.heroLeft}>
          <div className={styles.topFadeOverlay}></div>
          <div className={styles.performanceReport}>
            <h3>Daily Performance Report</h3>

            <div className={styles.reportTableWrapper}>
              <table className={styles.reportTable}>
                <thead>
                  <tr>
                    <th className={styles.firstColumn}>Sent</th>
                    <th>Viewed</th>
                    <th>Replies</th>
                    <th>Hires</th>
                    <th>View Rate</th>
                    <th>Reply Rate</th>
                    <th>Connects</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td className={styles.firstColumn}>20</td>
                    <td>13</td>
                    <td>10</td>
                    <td>6</td>
                    <td>75%</td>
                    <td>97%</td>
                    <td>200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <img
            src="/assets/images/ClientLeaf-lottie.png"
            alt="ClientLeaf animation"
          /> */}
          <Lottie animationData={final} />

          <p className={styles.headlineText}>
            Sick of{" "}
            <span className={styles.animatedWordMask}>
              <span className={styles.animatedWords} ref={wordsRef}>
                <span className={styles.animatedWord}>
                  Quality or Quantity Paradox,
                </span>
                <span className={styles.animatedWord}>Endless Revisions,</span>
                <span className={styles.animatedWord}>Missed Deadlines,</span>
                <span className={styles.animatedWord}>
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
            <span className={styles.highlightBrand}> ClientLeaf™</span>
          </p>
        </div>

        <div className={styles.ctaCard}>
          <div className={styles.cardBackground}>
            <BrownBg />
          </div>

          <div className={styles.brandLogo}>
            <Logo2 />
          </div>

          <h1>
            ClientLeaf™ puts you ahead
            <br />
            {""} of 95% of UpWorkers.
          </h1>

          <div className={styles.socialProof}>
            <Image
              src={Customers}
              width={120}
              height={40}
              alt="customer profiles"
            />

            <span>+14 Agencies Already Joined</span>
          </div>

          <button
            className={`${styles.primaryButton} ${styles.glassButton}`}
            onClick={() =>
              window.open(
                "https://forms.clickup.com/36179363/f/12g3d3-5838/CDYNB7UKBCG90MHXWW",
                "_blank"
              )
            }
          >
            <Lock fill="#ffffffe3" /> Request Early Access
          </button>

          <small className={styles.cardFooter}>
            © 2026 ClientLeaf. All rights reserved.
          </small>
        </div>
      </section>
    </main>
  );
};

export default page;
