"use client";

const CurrentYear = () => {
  const year = new Date().getFullYear();
  return <>{year ?? "\u00A0"}</>;
};

export default CurrentYear;
