import Home from "./components/Home";
import Confirmation from "./components/Confirmation";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const overrideMediaQuery = () => {
    for (let i = 0; i < document.styleSheets.length; i++) {
      try {
        const sheet = document.styleSheets[i];
        const rules = sheet.cssRules;
        for (let j = 0; j < rules.length; j++) {
          const rule = rules[j];
          if (!(rule instanceof CSSMediaRule)) {
            continue;
          }
          if (rule.media.mediaText !== "(prefers-color-scheme: dark)") {
            continue;
          }
          console.log(rule.cssRules[0].selectorText);
          let selector = rule.cssRules[0].selectorText;
          if (selector === ":root") {
            selector = ":root.dark";
          } else {
            selector = `:is(.dark ${selector})`;
          }
          const newRule = `${selector} { ${rule.cssRules[0].style.cssText} }`;
          sheet.deleteRule(j);
          sheet.insertRule(newRule, j);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    overrideMediaQuery();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message-sent" element={<Confirmation />} />
      </Routes>
    </>
  );
}

export default App;
