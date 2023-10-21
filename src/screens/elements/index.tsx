import React from "react";
import Breadcrumb from "components/breadcrumb/Breadcrumb";

const paths = [
  { label: "Payroll Management", link: "/" },
  { label: "Element Setup" },
  { label: "Elements" },
];

const Elements = () => {
  return (
    <div>
      <Breadcrumb paths={paths} />
    </div>
  );
};

export default Elements;
