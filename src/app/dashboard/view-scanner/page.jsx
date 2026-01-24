"use client";

import { useState } from "react";
import DownArrow from "../../../../public/assets/svgs/DownArrow";
import PriceDetailsForm from "../scanner/components/ScannerForm/ClientDetails/ClientDetails";
import FreelancerReqForm from "../scanner/components/ScannerForm/FreelancerReqForm/FreelancerReqForm";
import JobDetailsForm from "../scanner/components/ScannerForm/JobDetailsForm/JobDetailsForm";
import ClientDetailsForm from "../scanner/components/ScannerForm/PriceDetailsForm/PricdeDetailsForm";
import TopContainer from "../scanner/components/TopContainer/TopContainer";
import styles from "./page.module.scss";

export default function ViewScanner() {
  const [expandedForms, setExpandedForms] = useState({
    form1: false,
    form2: true,
  });

  const toggleForm = (formId) => {
    setExpandedForms((prev) => ({
      ...prev,
      [formId]: !prev[formId],
    }));
  };

  return (
    <div className={`${styles.viewScanner} flexCol`}>
      <TopContainer />
      <div className={`${styles.scannerFormContainer} flexCol`}>
        <div className={`${styles.ScannerForm} card flexCol`}>
          <div className={`${styles.topHeader} flexJustify`}>
            <h3 className="h3 font-quicksand">React Native Developer $1000</h3>
            <div className={`${styles.actionItems} flexRow`}>
              <button className="p1">Edit</button>
              <button className="p1">Delete</button>
              <div
                className={`${styles.arrowDown} flexCenter ${expandedForms.form1 ? styles.collapsed : ""}`}
                onClick={() => toggleForm("form1")}
              >
                <DownArrow />
              </div>
            </div>
          </div>

          {expandedForms.form1 && (
            <>
              <div className="divider"></div>
              <JobDetailsForm isViewMode />
              <div className="divider"></div>
              <PriceDetailsForm isViewMode />
              <div className="divider"></div>
              <ClientDetailsForm isViewMode />
              <div className="divider"></div>
              <FreelancerReqForm isViewMode />
            </>
          )}
        </div>

        {/* Second Form */}
        <div className={`${styles.ScannerForm} card flexCol`}>
          <div className={`${styles.topHeader} flexJustify`}>
            <h3 className="h3 font-quicksand">Website Development USA</h3>
            <div className={`${styles.actionItems} flexRow`}>
              <button className="p1">Edit</button>
              <button className="p1">Delete</button>
              <div
                className={`${styles.arrowDown} flexCenter ${expandedForms.form2 ? styles.collapsed : ""}`}
                onClick={() => toggleForm("form2")}
              >
                <DownArrow />
              </div>
            </div>
          </div>

          {expandedForms.form2 && (
            <>
              <div className="divider"></div>
              <JobDetailsForm isViewMode />
              <div className="divider"></div>
              <PriceDetailsForm isViewMode />
              <div className="divider"></div>
              <ClientDetailsForm isViewMode />
              <div className="divider"></div>
              <FreelancerReqForm isViewMode />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
