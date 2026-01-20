"use client";
import Selector from "@/app/components/ui/form/inputs/Selector/Selector";
import styles from "./FreelancerReqForm.module.scss";
import KeywordSelector from "@/app/components/ui/form/inputs/KeywordSelector/KeywordSelector";
import Checkbox from "@/app/components/ui/form/inputs/Checkbox/Checkbox";
import TextInput from "@/app/components/ui/form/inputs/TextInput/TextInput";

const talentType = [
  { value: "Agency only", label: "Agency only" },
  { value: "Freelancer", label: "Freelancer" },
];
const jobOptions = [
  { value: "Frontend Developer", label: "Frontend Developer" },
  { value: "Designer", label: "Designer" },
  { value: "Backend Developer", label: "Backend Developer" },
];
const successScore = [
  { value: "At least 90%+", label: "At least 90%+" },
  { value: "At least 80%+", label: "At least 80%+" },
  { value: "At least 70%+", label: "At least 70%+" },
];

const englishLevel = [
  { value: "Fluent", label: "Fluent" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Basic", label: "Basic" },
];

export default function FreelancerReqForm() {
  const handleSelect = (selectedOption) => {
    console.log("Selected", selectedOption);
  };

  const handleKeywordsChange = (selected) => {
    console.log("Selected keywords:", selected);
  };

  return (
    <div className={`${styles.formContainer} flexCol`}>
      <div className={`${styles.jobDetailsForm} flexCol`}>
        <h5 className="h5 font-quicksand">
          Freelancer / Agency Profile Requirements
        </h5>
        <div className={`${styles.jobDetailsFormGrid}`}>
          <div className={`${styles.colOne} flexCol`}>
            <div className={`${styles.inputContainer} flexCol`}>
              <label className="p1 font-quicksand">Talent Type</label>
              <Selector
                placeholder="Agency only"
                options={talentType}
                onSelect={handleSelect}
              />
            </div>
            <div className={`${styles.inputContainer} flexCol`}>
              <label className="p1 font-quicksand">
                Jobs for Agencies Located in the UK
              </label>
              <Selector
                placeholder="Include"
                options={jobOptions}
                onSelect={handleSelect}
              />
            </div>
          </div>

          <div className={`${styles.colOne} flexCol`}>
            <div className={`${styles.inputContainer} flexCol`}>
              <label className="p1 font-quicksand">Job Success Score</label>
              {/* <Selector
                placeholder="At least 90%+"
                options={successScore}
                onSelect={handleSelect}
              /> */}
               <TextInput placeholder="At least 90%+" />
            </div>
            <div className={`${styles.inputContainer} flexCol`}>
              <label className="p1 font-quicksand">
                Jobs for Agencies Located in the USA
              </label>
              <Selector
                placeholder="Exclude"
                options={jobOptions}
                onSelect={handleSelect}
              />
            </div>
          </div>

          <div className={`${styles.colOne} flexCol`}>
            <div className={`${styles.inputContainer} flexCol`}>
              <label className="p1 font-quicksand">English Level</label>
              <Selector
                placeholder="Fluent"
                options={englishLevel}
                onSelect={handleSelect}
              />
            </div>
            <div className={`${styles.inputContainer} flexCol`}>
              <label className="p1 font-quicksand">
                Jobs for Agencies Located in the Germany
              </label>
              <Selector
                placeholder="Include"
                options={jobOptions}
                onSelect={handleSelect}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
