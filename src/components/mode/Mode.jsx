
import React, { useContext } from "react";
import "./mode.css";
import { DataContext } from "../../context/DataContext";


function Mode() {

  const { langHandler, langPre, toggleTheme, theme } = useContext(DataContext);

  return (
    <div className={`mode-container ${theme === 'dark' ? 'mode-container-dark' : ''}`}>
      <div className="block">
        <label htmlFor="checkbox" className="toggle-theme">
          <div className="toggle-theme-checkbox">
            <input
              type="checkbox"
              id="checkbox"
              onChange={toggleTheme}
              checked={theme === 'dark'}
            />
          </div>

        </label>
      </div>

      <div>
        <div className="lang-handler-div">
          {theme === "dark" ? "LIGTH MODE " : "DARK MODE "}

          <span
            className={`lang-handler-span ${theme === 'dark' ? 'lang-handler-span-dark' : ''}`}
            onClick={langHandler}
          >
            |  {langPre === "en" ? " TÜRKÇE" : " İNGİLİZCE"}
          </span>
          'YE GEÇ
        </div>
      </div>
    </div>
  );
}

export default Mode;
