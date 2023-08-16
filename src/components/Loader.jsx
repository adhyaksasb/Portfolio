import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import HashLoader from "react-spinners/HashLoader";

const Loader = ({ loading, test }) => {
  if (!loading) return null;
  return (
    <div class="fixed bg-black bg-opacity-30 backdrop-blur-sm top-0 left-0 right-0 z-50 w-full flex justify-center items-center md:inset-0 h-full">
      <HashLoader
        className="disableCaret"
        color={"#784390"}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
