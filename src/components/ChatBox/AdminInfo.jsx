import React from "react";
import adminAvatar from "../../img/hr-admin.png";
import "./AdminInfo.scss";

const AdminInfo = () => {
  return (
    <div className="admin-info">
      <div className="admin-info__avatar">
        <img src={adminAvatar} alt="admin avatar" />
      </div>
      <h2 className="admin-info__name"> Huynh Thi Vi Phuong </h2>
    </div>
  );
};

export default AdminInfo;
