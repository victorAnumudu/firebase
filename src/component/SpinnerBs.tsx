import React from "react";

const SpinnerBs = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-2">
      <div className="spinner-border" role="status" style={{width:'50px', height: '50px'}}>
        {/* <span className="sr-only">Loading...</span> */}
      </div>
    </div>
  );
};

export default SpinnerBs;
