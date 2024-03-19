import React from "react";

const LoadingWarning = ({ isLoading }) => {
  return <>{isLoading && <p>Loading Items...</p>}</>;
};

export default LoadingWarning;
