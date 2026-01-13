import React from 'react'
import styles from "../page.module.scss";
const page = () => {
  return (
     <main className={styles.hero}>
      <section className={styles.heroInner}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.gradientText}>Sick of <br></br>
          Connects Cost,
          
          <br></br>
          Fake Jobs,
          <br></br>
          Every Job with 50+ Proposals,
          <br></br>
          $10 Projects,
          <br></br>
          Expensive Upwork Bidders,
          <br></br>
          Quality or Quantity Paradox,
          <br></br>
         and a million more problems?
          </p>
         
        <p className={styles.gradientText}>
          We were too! <br></br>
          And that's why we built<br></br>
                    <span className={styles.purpleGrad}>ClientLeaf™</span>

        </p>
       

        </div>

        {/* RIGHT CARD */}
        <div className={styles.card}>
          <div className={styles.logo}>
            <span />
            <span />
            <span />
          </div>

          <h1>
            ClientLeaf™ puts you ahead
            <br />
            of 95% of UpWorkers.
          </h1>

          <div className={styles.avatars}>
            <img src="/avatar1.png" alt="" />
            <img src="/avatar2.png" alt="" />
            <img src="/avatar3.png" alt="" />
            <span>+23 More Already Joined</span>
          </div>

          <button className={styles.cta}>
            🔒 Request Early Access
          </button>

          <small className={styles.footer}>
            © 2026 ClientLeaf. All rights reserved.
          </small>
        </div>
      </section>
    </main>
  )
}

export default page