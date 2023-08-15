import React from "react";

const Confirmation = () => {
  return (
    <div className="w-full h-screen bg-[#10142c]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Submission Confirmed!
        </h1>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Thank you for your submission. I will reply to you as soon as
          possible.
        </p>
        <a href="/" className="text-[#784390]">
          Go back to portfolio
        </a>
      </div>
    </div>
  );
};

export default Confirmation;
