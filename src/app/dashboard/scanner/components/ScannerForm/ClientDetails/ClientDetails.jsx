"use client";
import Selector from "@/app/components/ui/form/inputs/Selector/Selector";
import styles from "./ClientDetails.module.scss";
import USAFlag from "../../../../../../../public/assets/svgs/USAFlag";
import FeatureToggle from "@/app/components/ui/form/inputs/FeatureToggle/FeatureToggle";

const rating = [
  { value: "5", label: "5" },
  { value: "4", label: "4" },
  { value: "3", label: "3" },
  { value: "2", label: "2" },
];
const hiringHistory = [
  { value: "1 to 9 hires", label: "1 to 9 hires" },
  { value: "10 to 15 hires", label: "10 to 15 hires" },
  { value: "20 to 45 hires", label: "20 to 45 hires" },
];
const hoursPerWeek = [
  {
    value: "More than 30 hours per week",
    label: "More than 30 hours per week",
  },
  {
    value: "More than 10 hours per week",
    label: "More than 10 hours per week",
  },
  {
    value: "More than 15 hours per week",
    label: "More than 15 hours per week",
  },
];
const totalSpend = [
  {
    value: "$5K+",
    label: "$5K+",
  },
  {
    value: "$5K+",
    label: "$5K+",
  },
  {
    value: "$5K+",
    label: "$5K+",
  },
];

const included = [{ value: "included", label: "included" }];


export default function PriceDetailsForm({ isViewMode = false }) {
  const handleSelect = (selectedOption) => {
    console.log("Selected", selectedOption);
  };

  return (
    <div className={`${styles.formContainer} flexCol`}>
      <div className={`${styles.jobDetailsForm} flexCol`}>
        <h5 className="h5 font-quicksand">Client Details</h5>
        <div className={`${styles.jobDetailsFormGrid}`}>
          <div className={`${styles.colOne} flexCol`}>
            <div className={`${styles.inputContainer} flexCol`}>
              <label className="p1 font-quicksand">ClientLeaf Rating</label>
              <Selector
                placeholder="5"
                options={rating}
                onSelect={handleSelect}
                disabled={isViewMode}
              />
            </div>
            <div className={`${styles.inputContainer} flexCol`}>
              <label className="p1 font-quicksand">Client Hiring History</label>
              <Selector
                placeholder="1 to 9 hires"
                options={hiringHistory}
                onSelect={handleSelect}
                disabled={isViewMode}
              />
            </div>
            <div className={`${styles.inputContainer} flexCol`}>
              <label className="p1 font-quicksand">Total Spend (USD)</label>
              <Selector
                placeholder="$5K+"
                options={totalSpend}
                onSelect={handleSelect}
                disabled={isViewMode}
              />
            </div>
          </div>

          <div className={`${styles.colOne} ${styles.fullHeight} flexCol`}>
            <div className={`${styles.inputContainer} ${styles.fullHeight} flexCol`}>
           
              <div className={`${styles.priceGrid} flexRow`}>
                <div className={`${styles.inputContainer} flexCol`}>
                  <label className="p1 font-quicksand">Rating</label>
                  <Selector
                    placeholder="4 to 5 stars"
                    options={hoursPerWeek}
                    onSelect={handleSelect}
                    disabled={isViewMode}
                  />
                </div>
                <div className={`${styles.inputContainer} flexCol`}>
                  <label className="p1 font-quicksand">Reviews Count</label>
                  <Selector
                    placeholder="More than 10"
                    options={hoursPerWeek}
                    onSelect={handleSelect}
                    disabled={isViewMode}
                  />
                </div>
              </div>
               <div className={`${styles.priceGrid} flexRow`}>
                <div className={`${styles.inputContainer} flexCol`}>
                  <label className="p1 font-quicksand">Average Hourly Rate Paid</label>
                  <Selector
                    placeholder="$20"
                    options={hoursPerWeek}
                    onSelect={handleSelect}
                    disabled={isViewMode}
                  />
                </div>
                <div className={`${styles.inputContainer} flexCol`}>
                  <label className="p1 font-quicksand">Hire rate (%)</label>
                  <Selector
                    placeholder="75%"
                    options={hoursPerWeek}
                    onSelect={handleSelect}
                    disabled={isViewMode}
                  />
                </div>
              </div>
               <div className={`${styles.priceGrid} ${styles.fullHeight} flexRow`}>
                <div className={`${styles.inputContainer} ${styles.fullHeight} flexCol`}>
                  <label className="p1 font-quicksand">Enterprise Clients</label>
                    <FeatureToggle disabled={isViewMode} />
                </div>
                <div className={`${styles.inputContainer} ${styles.fullHeight} flexCol`}>
                  <label className="p1 font-quicksand">Payment Method Verified</label>
                    <FeatureToggle disabled={isViewMode} />
                </div>
              </div>
            </div>
          </div>

         
           <div className={`${styles.colOne} flexCol`}>
            <div className={`${styles.inputContainer} flexCol`}>
              <label className="p1 font-quicksand">Client Location</label>
              <Selector
                placeholder="USA"
                options={rating}
                onSelect={handleSelect}
                leftIcon={<USAFlag />}
                disabled={isViewMode}
              />
            </div>
            <div className={`${styles.inputContainer} flexCol`}>
              <label className="p1 font-quicksand">Exclude Clients From</label>
              <Selector
                placeholder="Germany"
                options={hiringHistory}
                onSelect={handleSelect}
                 leftIcon={<USAFlag />}
                 disabled={isViewMode}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
