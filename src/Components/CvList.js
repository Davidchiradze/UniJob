import React from "react";
import TsuLogo from "../assets/tsu.png";
import "./CvList.scss";
const CvArray = [
  {
    Fullname: "Daviti Chiradze",
    Profession: "React Developer",
    Education: "თბილისის სახელმწიფო უნივერსიტეტი",
    Photo: `${TsuLogo}`,
    Location: "Kutaisi,Georgia",
    WorkRate: "სრული განაკვეთი",
  },
  {
    Fullname: "Giorgi Khurcidze",
    Profession: "Full Stack Developer",
    Education: "თბილისის სახელმწიფო უნივერსიტეტი",
    Photo: `${TsuLogo}`,
    Location: "Kutaisi,Georgia",
    WorkRate: "ნახევარი განაკვეთი",
  },
  {
    Fullname: "Giorgi Parcxaladze",
    Profession: "Software Tester",
    Education: "თბილისის სახელმწიფო უნივერსიტეტი",
    Photo: `${TsuLogo}`,
    Location: "Tbilisi,Georgia",
    WorkRate: "სრული განაკვეთი",
  },
  {
    Fullname: "Nika Gobejishvili",
    Profession: "Front-End Developer",
    Education: "თბილისის სახელმწიფო უნივერსიტეტი",
    Photo: `${TsuLogo}`,
    Location: "Tbilisi,Georgia",
    WorkRate: "ნახევარი განაკვეთი",
  },
  {
    Fullname: "Sergi Janelidze",
    Profession: "Front-End Developer",
    Education: "თბილისის სახელმწიფო უნივერსიტეტი",
    Photo: `${TsuLogo}`,
    Location: "Kutaisi,Georgia",
    WorkRate: "სრული განაკვეთი",
  },
  {
    Fullname: "Giga Pirtskhelava",
    Profession: "Project Manager",
    Education: "თბილისის სახელმწიფო უნივერსიტეტი",
    Photo: `${TsuLogo}`,
    Location: "Tbilisi,Georgia",
    WorkRate: "სრული განაკვეთი",
  },
  {
    Fullname: "Iakob Kvantrishvili",
    Profession: "Front-End Developer",
    Education: "თბილისის სახელმწიფო უნივერსიტეტი",
    Photo: `${TsuLogo}`,
    Location: "Tbilisi,Georgia",
    WorkRate: "სრული განაკვეთი",
  },
  {
    Fullname: "David Kharibegashvili",
    Profession: "Front-End Developer",
    Education: "თბილისის სახელმწიფო უნივერსიტეტი",
    Photo: `${TsuLogo}`,
    Location: "Tbilisi,Georgia",
    WorkRate: "სრული განაკვეთი",
  },
  {
    Fullname: "Erekle Bajadze",
    Profession: "Database Developer",
    Education: "თბილისის სახელმწიფო უნივერსიტეტი",
    Photo: `${TsuLogo}`,
    Location: "Tbilisi,Georgia",
    WorkRate: "სრული განაკვეთი",
  },
  {
    Fullname: "Tornike Khmelidze",
    Profession: "Javascript Developer",
    Education: "თბილისის სახელმწიფო უნივერსიტეტი",
    Photo: `${TsuLogo}`,
    Location: "Tbilisi,Georgia",
    WorkRate: "სრული განაკვეთი",
  },
];

const CvList = () => {
  return (
    <section>
      <div className="list-wrapper">
        <h1>Cv List</h1>
        {CvArray.map((item) => (
          <div className="cv-wrapper">
            <div className="photo-box">
              <img src={item.Photo} className="cv-image" />
            </div>
            <div className="cv-detail-box">
              <h2>
                {item.Fullname} ({item.Profession})
              </h2>
              <p className="education-p">
                <ion-icon name="school-outline" className="icons"></ion-icon>{" "}
                {item.Education}
              </p>
              <p>
                <ion-icon name="location-outline"></ion-icon>
                {item.Location}
              </p>
            </div>
            <div className="button-box">
              <button className="apply-btn">დაეკონტაქტეთ აპლიკანტს</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CvList;
