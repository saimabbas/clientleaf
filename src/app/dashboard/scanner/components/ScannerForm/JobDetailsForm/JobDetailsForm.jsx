"use client";
import Selector from "@/app/components/ui/form/inputs/Selector/Selector";
import styles from "./JobDetailsForm.module.scss";
import KeywordSelector from "@/app/components/ui/form/inputs/KeywordSelector/KeywordSelector";
import Checkbox from "@/app/components/ui/form/inputs/Checkbox/Checkbox";

const screenOptions = [
  { value: "With screening questions", label: "With screening questions" },
  { value: "With screening questions2", label: "With screening questions2" },
  { value: "With screening questions3", label: "With screening questions3" },
  { value: "With screening questions4", label: "With screening questions4" },
];
const categoryOptions = [
  { value: "Web & Mobile Design", label: "Web & Mobile Design" },
  { value: "UI/UX Design", label: "UI/UX Design" },
  { value: "FullStack Development", label: "FullStack Development" },
];
const projectLengthOptions = [
  { value: "1 to 3 months", label: "1 to 3 months" },
  { value: "2 to 6 months", label: "2 to 6 months" },
  { value: "1 to 2 years", label: "1 to 2 years" },
];
const keywordOptions = [
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "frontend", label: "Frontend Development" },
  { value: "uiux", label: "UI/UX Design" },
  { value: "tailwind", label: "Tailwind CSS" },
];

const checkboxOptions = [
  { value: "title", label: "Search in Title" },
  { value: "description", label: "Search in Description" },
  { value: "skills", label: "Search in Skills" },
  { value: "keywords", label: "Search in Highlighted Keywords" },
];

const included = [{ value: "included", label: "included" }];

export default function JobDetailsForm() {
  const handleSelect = (selectedOption) => {
    console.log("Selected", selectedOption);
  };

  const handleKeywordsChange = (selected) => {
    console.log("Selected keywords:", selected);
  };

  return (
      <div className={`${styles.formContainer} flexCol`}>
        <div className={`${styles.jobDetailsForm} flexCol`}>
          <h5 className="h5 font-quicksand">Job Details</h5>
          <div className={`${styles.jobDetailsFormGrid}`}>
            <div className={`${styles.colOne} flexCol`}>
              <div className={`${styles.inputContainer} flexCol`}>
                <label className="p1 font-quicksand">Category</label>
                <Selector
                  placeholder="Web & Mobile Design"
                  options={categoryOptions}
                  onSelect={handleSelect}
                />
              </div>
              <div className={`${styles.inputContainer} flexCol`}>
                <label className="p1 font-quicksand">Project Length</label>
                <Selector
                  placeholder="1 to 3 months"
                  options={projectLengthOptions}
                  onSelect={handleSelect}
                />
              </div>
              <div className={`${styles.inputContainer} flexCol`}>
                <label className="p1 font-quicksand">Screening Questions</label>
                <Selector
                  placeholder="With screening questions"
                  options={screenOptions}
                  onSelect={handleSelect}
                />
              </div>
               <div className={`${styles.priceGrid} flexRow`}>
                <div className={`${styles.inputContainer} flexCol`}>
                  <label className="p1 font-quicksand">Enterprise Clients</label>
                   <Checkbox options={included} />
                </div>
                <div className={`${styles.inputContainer} flexCol`}>
                  <label className="p1 font-quicksand">Payment Method Verified</label>
                   <Checkbox options={included} />
                </div>
              </div>
            </div>

            <div className={`${styles.colOne} flexCol`}>
              <div className={`${styles.inputContainer} flexCol`}>
                <label className="p1 font-quicksand">Positive Keyword(s)</label>
                <KeywordSelector
                  placeholder="Search keywords"
                  options={keywordOptions}
                  onSelect={handleKeywordsChange}
                />
              </div>

              <div className="divider"></div>

              <Checkbox options={checkboxOptions} />
            </div>

            <div className={`${styles.colOne} flexCol`}>
              <div className={`${styles.inputContainer} flexCol`}>
                <label className="p1 font-quicksand">Negative Keyword(s)</label>
                <KeywordSelector
                  placeholder="Search keywords"
                  options={keywordOptions}
                  onSelect={handleKeywordsChange}
                />
              </div>
              <div className="divider"></div>
              <Checkbox options={checkboxOptions} />
            </div>
             
          </div>
        </div>
      </div>
  );
}
