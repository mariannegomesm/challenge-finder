import React from "react";
import Lottie from "react-lottie";

const NoFiles = ({ name }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require(`../../assets/${name}.json`),
  };

  return (
    <div className="section">
      <Lottie options={defaultOptions} height={110} width={110} />
    </div>
  );
};

export default NoFiles;
