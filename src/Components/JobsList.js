import React from "react";
import "./JobsList.scss";
import JobsLogo1 from "../assets/jobslogo1.png";
import JobsLogo2 from "../assets/jobslogo2.png";
const JobsArray = [
  {
    JobsTitle: "Web Designer, Graphic Designer, UI/UX Designer & Art",
    CompanyName: "თსუ-ს აკადემია",
    Location: "Tbilisi,Georgia",
    Photo: `${JobsLogo1}`,
    WorkRate: "სრული განაკვეთი",
  },
  {
    JobsTitle: "PHP Developer, Team of PHP & IT Co",
    CompanyName: "თსუ-ს აკადემია",
    Location: "Kutaisi,Georgia",
    Photo: `${JobsLogo2}`,
    WorkRate: "ნახევარი განაკვეთი",
  },
  {
    JobsTitle: "Web Designer, Graphic Designer, UI/UX Designer & Art",
    CompanyName: "თსუ-ს აკადემია",
    Location: "Tbilisi,Georgia",
    Photo: `${JobsLogo1}`,
    WorkRate: "სრული განაკვეთი",
  },
  {
    JobsTitle: "PHP Developer, Team of PHP & IT Co",
    CompanyName: "თსუ-ს აკადემია",
    Location: "Kutaisi,Georgia",
    Photo: `${JobsLogo2}`,
    WorkRate: "ნახევარი განაკვეთი",
  },
  {
    JobsTitle: "Web Designer, Graphic Designer, UI/UX Designer & Art",
    CompanyName: "თსუ-ს აკადემია",
    Location: "Tbilisi,Georgia",
    Photo: `${JobsLogo1}`,
    WorkRate: "სრული განაკვეთი",
  },
];

const JobsList = () => {
  return (
    <section className="jobs-section">
      <div className="list-wrapper">
        <h1>Jobs List</h1>
        {JobsArray.map((item) => (
          <div className="job-wrapper">
            <div className="photo-box">
              <img src={item.Photo} />
            </div>
            <div className="job-detail-box">
              <h2>{item.JobsTitle}</h2>
              <p>
                <ion-icon name="school-outline" className="icons"></ion-icon>{" "}
                {item.CompanyName}
              </p>
              <p>
                {" "}
                <ion-icon name="location-outline"></ion-icon>
                {item.Location}
              </p>
            </div>
            <div className="button-box">
              <span className="workrate">{item.WorkRate}</span>
              <button className="apply-btn">Apply</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobsList;
