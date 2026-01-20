"use client";
import Selector from "@/app/components/ui/form/inputs/Selector/Selector";
import DownArrow from "../../../../../../public/assets/svgs/DownArrow";
import styles from "./ScannerForm.module.scss";
import KeywordSelector from "@/app/components/ui/form/inputs/KeywordSelector/KeywordSelector";
import Checkbox from "@/app/components/ui/form/inputs/Checkbox/Checkbox";
import JobDetailsForm from "./JobDetailsForm/JobDetailsForm";
import PriceDetailsForm from "./PriceDetailsForm/PricdeDetailsForm";
import FreelancerReqForm from "./FreelancerReqForm/FreelancerReqForm";
import ClientDetailsForm from "./ClientDetails/ClientDetails";

export default function ScannerForm() {
  const handleSelect = (selectedOption) => {
    console.log("Selected", selectedOption);
  };

  const handleKeywordsChange = (selected) => {
    console.log("Selected keywords:", selected);
  };

  return (
    <div className={`${styles.ScannerForm} card flexCol`}>
      <div className={`${styles.topHeader} flexJustify`}>
        <h3 className="h3 font-quicksand">Website Development USA</h3>
        <button className="p1">Save Scanner</button>
      </div>
      <div className="divider"></div>
      <JobDetailsForm />
       <div className="divider"></div>
       <PriceDetailsForm />
         <div className="divider"></div>
         <ClientDetailsForm />
         <div className="divider"></div>
         <FreelancerReqForm />
    </div>
  );
}
