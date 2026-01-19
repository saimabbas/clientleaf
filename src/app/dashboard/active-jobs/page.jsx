import UpworkLogo from "@/app/components/ui/UpworkLogo/UpworkLogo";
import BrifeCase from "../../../../public/assets/svgs/Brifecase";
import ButtonGradient from "../../../../public/assets/svgs/ButtonGradient";
import Dislike from "../../../../public/assets/svgs/Dislike";
import Dollar from "../../../../public/assets/svgs/Dollar";
import Like from "../../../../public/assets/svgs/Like";
import Link from "../../../../public/assets/svgs/LinkIcon";
import Share from "../../../../public/assets/svgs/Share";
import Star from "../../../../public/assets/svgs/Star";
import Upwork from "../../../../public/assets/svgs/Upwork";
import USAFlag from "../../../../public/assets/svgs/USAFlag";
import User from "../../../../public/assets/svgs/User";
import Verify from "../../../../public/assets/svgs/Verify";
import styles from "./page.module.scss";

export default function ActiveJobs() {
  return (
    <div className={`${styles.activeJob} flexCol`}>
      <div className={`${styles.jobContainer} card`}>
        <div className={`${styles.jobInfo} flexCol`}>
          <div className={`${styles.jobPosted} flexCol`}>
            <div className={`${styles.jobHeader} flexJustify flexWrap`}>
              <div className={`${styles.jobTitle} flexRow`}>
               <UpworkLogo />
                <h2 className="h2">Edit App Promotional Video</h2>
              </div>
              <div className={`${styles.jobActions} flexRow`}>
                <h6 className="h6">3 minutes</h6>
                <div className={`${styles.ActionItems} flexRow`}>
                  <span className="flexCenter">
                    <Like />
                  </span>
                  <span className="flexCenter">
                    <Dislike />
                  </span>
                  <span className="flexCenter">
                    <Link />
                  </span>
                </div>
              </div>
            </div>
            <h6 className="h6">
              We are looking for a WordPress & Elementor expert to manage and
              optimize a high-traffic site for a major business conference
              platform. The ideal candidate will have strong skills in
              troubleshooting performance issues, plugin conflicts, and hosting
              failures. Experience with hosting environments, caching, DNS, and
              WordPress performance tuning is essential. AWS experience is a
              plus as we plan to migrate from shared hosting. US-based
              candidates, especially on the East Coast, are preferred, but
              expertise and reliability are top priorities.
            </h6>
            <div className={`${styles.skills} flexRow flexWrap`}>
              <div className={`${styles.chip} flexCenter`}>
                <h6 className="h6">Video Editing</h6>
              </div>
              <div className={`${styles.chip} flexCenter`}>
                <h6 className="h6">Video Production</h6>
              </div>
              <div className={`${styles.chip} flexCenter`}>
                <h6 className="h6">Videography</h6>
              </div>
              <div className={`${styles.chip} flexCenter`}>
                <h6 className="h6">Video Publishing</h6>
              </div>
            </div>
          </div>

          <div className={`${styles.jobDetails} flexCol card`}>
            <h5 className="h5">Job Details</h5>
            <div className={`${styles.jobDetailsContent}`}>
              <div className={`${styles.jobDetailsItem} flexRow flexWrap`}>
                <h6 className="h6">Payment Method</h6>
                <h6 className="h6 highlight">Hourly</h6>
              </div>
              <div className={`${styles.jobDetailsItem} flexRow flexWrap`}>
                <h6 className="h6">Price/Hourly Rate</h6>
                <h6 className="h6 highlight">$10 - $27 / hour</h6>
              </div>
              <div className={`${styles.jobDetailsItem} flexRow flexWrap`}>
                <h6 className="h6">Hours/week Limit</h6>
                <h6 className="h6 highlight">Less than 30 hours / week</h6>
              </div>
              <div className={`${styles.jobDetailsItem} flexRow flexWrap`}>
                <h6 className="h6">Expertise Required</h6>
                <h6 className="h6 highlight">Intermediate</h6>
              </div>
              <div className={`${styles.jobDetailsItem} flexRow flexWrap`}>
                <h6 className="h6">Project Duratiion</h6>
                <h6 className="h6 highlight">Less than 1 month</h6>
              </div>
              <div className={`${styles.jobDetailsItem} flexRow flexWrap`}>
                <h6 className="h6">Project Recurrence</h6>
                <h6 className="h6 highlight">One-time Project</h6>
              </div>
            </div>
          </div>

          <div className={`${styles.jobQuestions} flexCol flexWrap`}>
            <h5 className="h5">Questions Asked By The Client</h5>
            <ol className="flexCol">
              <li className="h6">
                We are looking for a WordPress & Elementor expert to manage and
                optimize a high-traffic site for a
              </li>
              <li className="h6">
                We are looking for a WordPress & Elementor expert to manage and
                optimize a high-traffic site for a major business conference
                platform.
              </li>
              <li className="h6">
                We are looking for a WordPress & Elementor expert to manage and
                optimize a high-traffic site for a major business conference
                platform.
              </li>
            </ol>
          </div>
        </div>

        <div className={`${styles.clientContainer} card flexCol`}>
          <h2 className="h2">About The Client</h2>
          <div className={`${styles.clientInfo} flexCol`}>
            <div className={`${styles.clientInfoContent} flexCol`}>
              <div className={`${styles.clientInfoItem} flexRow`}>
                <span className="flexCenter">
                  <div className={`${styles.glow}`}></div>
                  <h6 className="h6 highlight">5</h6>
                </span>
                <h6 className="h6 gradientText">ClientLeaf Rating</h6>
              </div>
              <div className={`${styles.clientInfoItem} flexRow`}>
                <User />
                <h6 className="h6 highlight">Individual</h6>
              </div>
              <div className={`${styles.clientInfoItem} flexRow`}>
                <Share />
                <h6 className="h6 highlight">High Hire Rate</h6>
              </div>
            </div>
            <div className="divider"></div>
            <div className={`${styles.clientInfoContent} flexCol`}>
              <div className={`${styles.clientInfoItem} flexRow`}>
                <Verify />
                <h6 className="h6 highlight">Payment Verifiied</h6>
              </div>
              <div className={`${styles.clientInfoItem} flexRow`}>
                <div className={`${styles.stars} flexRow`}>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>

                <h6 className="h6 highlight">
                  5.00 <span className="h6">(20 reviews)</span>
                </h6>
              </div>
              <div className={`${styles.clientInfoItem} flexRow`}>
                <Dollar />
                <h6 className="h6 highlight">$4.1K Spent</h6>
              </div>
              <div className={`${styles.clientInfoItem} flexRow`}>
                <USAFlag />
                <h6 className="h6 highlight">USA</h6>
              </div>
            </div>
            <div className="divider"></div>
            <div className={`${styles.clientInfoContent} flexCol`}>
              <div
                className={`${styles.clientInfoItem} ${styles.hours} flexRow`}
              >
                <BrifeCase />
                <div className={`${styles.clientInfoText} flexCol`}>
                  <h6 className="h6 highlight">42 Projects Done on Upwork</h6>
                  <h6 className="h6">Avg. $25/hour Paid | 3 Open Jobs</h6>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.buttons} flexCol`}>
            <button className={`${styles.transparentBtn} h6 highlight`}>
              <div className={`${styles.btnGradient}`}>
                <ButtonGradient />
              </div>
              Move to Active Jobs
            </button>
            <button className={`${styles.transparentBtn} h6`}>Discard</button>
          </div>
        </div>
      </div>
    </div>
  );
}
