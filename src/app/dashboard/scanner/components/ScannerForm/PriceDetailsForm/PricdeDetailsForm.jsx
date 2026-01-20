"use client";
import Selector from "@/app/components/ui/form/inputs/Selector/Selector";
import styles from "./PricdeDetailsForm.module.scss";
import KeywordSelector from "@/app/components/ui/form/inputs/KeywordSelector/KeywordSelector";
import Checkbox from "@/app/components/ui/form/inputs/Checkbox/Checkbox";
import TextInput from "@/app/components/ui/form/inputs/TextInput/TextInput";

const experienceLevel = [
  { value: "Intermediate", label: "Intermediate" },
  { value: "Expert", label: "Expert" },
];
const proposals = [
  { value: "5 to 10", label: "5 to 10" },
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

const included = [{ value: "included", label: "included" }];

export default function ClientDetailsForm() {
  const handleSelect = (selectedOption) => {
    console.log("Selected", selectedOption);
  };

  const handleKeywordsChange = (selected) => {
    console.log("Selected keywords:", selected);
  };

  return (
    <div className={`${styles.formContainer} flexCol`}>
      <div className={`${styles.jobDetailsForm} flexCol`}>
        <h5 className="h5 font-quicksand">Price Details</h5>
        <div className={`${styles.jobDetailsFormGrid}`}>
          <div className={`${styles.colOne} flexCol`}>
            <div className={`${styles.inputContainer} flexCol`}>
              <label className="p1 font-quicksand">Experience Level</label>
              <Selector
                placeholder="Intermediate"
                options={experienceLevel}
                onSelect={handleSelect}
              />
            </div>
            <div className={`${styles.inputContainer} flexCol`}>
              <label className="p1 font-quicksand">Number of Proposals</label>
              <Selector
                placeholder="5 to 10"
                options={proposals}
                onSelect={handleSelect}
              />
            </div>
          </div>

          <div className={`${styles.colOne} flexCol`}>
            <div className={`${styles.inputContainer} flexCol`}>
              <div className={`${styles.labelCheckbox} flexJustify`}>
                <label className="p1 font-quicksand">Hourly Rate</label>
                <Checkbox options={included} />
              </div>
              <div className={`${styles.priceGrid} flexRow`}>
                <div className={`${styles.inputContainer} flexRow`}>
                  <label className="p1 font-quicksand">From</label>
                     <TextInput placeholder="$15" />
                </div>
                <div className={`${styles.inputContainer} flexRow`}>
                  <label className="p1 font-quicksand">To</label>
                  <TextInput placeholder="$25" />
                </div>
              </div>
            </div>
            <div className={`${styles.inputContainer} flexCol`}>
              <label className="p1 font-quicksand">Hours per Week</label>
              <Selector
                placeholder="More than 30 hours per week"
                options={hoursPerWeek}
                onSelect={handleSelect}
              />
            </div>
          </div>

          <div className={`${styles.colOne} flexCol`}>
            <div className={`${styles.inputContainer} flexCol`}>
              <div className={`${styles.labelCheckbox} flexJustify`}>
                <label className="p1 font-quicksand">Fixed Price</label>
                <Checkbox options={included} />
              </div>
              <div className={`${styles.priceGrid} flexRow`}>
                <div className={`${styles.inputContainer} flexRow`}>
                  <label className="p1 font-quicksand">From</label>
                  {/* <Selector
                    placeholder="$1500"
                    options={hoursPerWeek}
                    onSelect={handleSelect}
                  /> */}
                   <TextInput placeholder="$1500" />
               
                </div>
                <div className={`${styles.inputContainer} flexRow`}>
                  <label className="p1 font-quicksand">To</label>
                  {/* <Selector
                    placeholder="$5000"
                    options={hoursPerWeek}
                    onSelect={handleSelect}
                  /> */}
                   <TextInput placeholder="$5000" />
                </div>
              </div>
            </div>
            <div className={`${styles.inputContainer} ${styles.fullHeight} flexCol`}>
              <label className="p1 font-quicksand">
                Projects without Budget Specification
              </label>
              <Checkbox options={included} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
