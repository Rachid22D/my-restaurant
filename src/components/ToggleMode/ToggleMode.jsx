import { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { sunnyOutline, moonOutline } from "ionicons/icons";

const ToggleMode = () => {
  // State to track whether dark mode is enabled or not
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Add or remove "dark-mode" class on the <body> element based on darkMode state
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]); // Runs whenever darkMode state changes

  return (
    <button
      id="toggle-mode"
      className="toggle-mode-btn"
      // Toggle dark mode state when the button is clicked
      onClick={() => setDarkMode((prevMode) => !prevMode)}
    >
      <IonIcon
        id="mode-icon"
        // Change the icon dynamically based on the darkMode state
        icon={darkMode ? sunnyOutline : moonOutline}
      />
    </button>
  );
};

export default ToggleMode;
