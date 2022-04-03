import React from "react";
import LeftInfo from "./LeftInfo";
import RightInfo from "./RightInfo";
import "./CompanyInfo.scss";

const CompanyInfo = () => {
  return (
    <div className="company-info">
      <LeftInfo />
      <RightInfo />
    </div>
  );
};

export default CompanyInfo;
