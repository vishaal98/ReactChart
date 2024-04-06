import React from "react";
import PropTypes from "prop-types";

const CustomCircularLoading = ({ size, color }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: size,
        height: size,
        borderRadius: "50%",
        border: `10px solid ${color}`,
        borderTop: "2px solid transparent",
        animation: "spin 1s linear infinite",
      }}
    />
  );
};

CustomCircularLoading.propTypes = {
  size: PropTypes.number, // Size of the circular loading indicator
  color: PropTypes.string, // Color of the circular loading indicator
};

CustomCircularLoading.defaultProps = {
  size: 40, // Default size is 40px
  color: "blue", // Default color is blue
};

export default CustomCircularLoading;
