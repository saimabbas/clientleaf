import React from 'react'
import styles from "./design1.module.scss";
import Logo1 from '../../../public/assets/svgs/Logo1';
import Lock from '../../../public/assets/svgs/Lock';
const page = () => {
  return (
     <main className={styles.hero}>
      <section className={styles.heroInner}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.gradientText}>Sick of <br></br>
          Connects Cost,
          
          <br></br>
          and a million more problems?
          </p>
         
        <p className={styles.gradientText}>
          We were too! <br></br>
          And that's why we built<br></br>
                    <span className={styles.multiLine}>ClientLeaf™</span>

        </p>
       

        </div>

        {/* RIGHT CARD */}
        <div className={styles.card}>
          <img src="/assets/images/multigrad.png" alt="three-dots" className={styles.multibg} />
          <div className={styles.logo}>
           <Logo1 />
          </div>

          <h1>
            ClientLeaf™ puts you ahead
            <br />
            of 95% of UpWorkers.
          </h1>

          <div className={styles.avatars}>
            <img src="/assets/images/profiles.png" width={120} height={40} alt="profiles" />
            <span>+23 More Already Joined</span>
          </div>

          <button className={styles.cta}>
            <Lock /> Request Early Access
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