import { useState } from "react";
import FloatingTextContext from "../contexts/FloatingTextContext";
import PropTypes from "prop-types";

const FloatingTextProvider = ({ children }) => {
  const [floatingTexts, setFloatingTexts] = useState([]);

  const createFloatingText = (event, label) => {
    const id = Date.now();
    const x = event.clientX;
    const y = event.clientY;

    setFloatingTexts((prev) => [...prev, { id, x, y, label }]);

    // Remove after animation completes
    setTimeout(() => {
      setFloatingTexts((prev) => prev.filter((text) => text.id !== id));
    }, 1000);
  };

  return (
    <FloatingTextContext.Provider value={{ floatingTexts, createFloatingText }}>
      {children}
    </FloatingTextContext.Provider>
  );
};

FloatingTextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FloatingTextProvider;
