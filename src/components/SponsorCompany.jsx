import React from "react";
import styles from "../styles/SponsorCompany.module.css";

const SponsorCompany = ({ companies }) => {
  return (
    <div className={styles.container}>
      {companies.map((company) => (
        <div className={styles.company} key={company.name}>
          <a href={company.websiteUrl}>
            <img src={company.logoSrc} alt={company.name} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SponsorCompany;
