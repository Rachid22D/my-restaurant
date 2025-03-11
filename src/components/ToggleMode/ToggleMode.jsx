import { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { sunnyOutline, moonOutline } from "ionicons/icons";

const ToggleMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // عند تفعيل الوضع الداكن، نضيف كلاس "dark-mode" لعنصر body
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <button
      id="toggle-mode"
      className="toggle-mode-btn"
      onClick={() => setDarkMode((prevMode) => !prevMode)}
    >
      <IonIcon
        id="mode-icon"
        icon={darkMode ? sunnyOutline : moonOutline}
      />
    </button>
  );
};

export default ToggleMode;
