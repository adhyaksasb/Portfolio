import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-scroll";

const ScrollToTop = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const [showTopBtn, setShowTopBtn] = useState(false);
  return (
    <Link to="home" smooth={true} duration={500} className="top-to-btm">
      {" "}
      {showTopBtn && <FaAngleUp className="icon-position icon-style" />}{" "}
    </Link>
  );
};

export default ScrollToTop;
