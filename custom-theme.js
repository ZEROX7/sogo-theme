// SOGo Theme Selector
(function () {
  "use strict";

  const STORAGE_KEY = "sogo-selected-theme";
  const STYLE_ID = "sogo-custom-theme-style";
  const OLD_STYLE_ID = "sogo-dark-theme";
  const SCRIPT_ID = "sogo-custom-theme-script";
  const SELECTOR_ID = "sogo-theme-selector";
  const MENU_ID = "sogo-theme-menu";

  let currentEffectiveTheme = null;

  const CURRENT_SCRIPT =
  document.currentScript && document.currentScript.src
  ? document.currentScript.src
  : "/SOGo.woa/WebServerResources/js/theme.js";

  const BASE_URL = new URL("./", CURRENT_SCRIPT).href;

  const THEME_FILES = {
    darkClassic: new URL("themes/dark-classic-theme.js", BASE_URL).href,
 darkFull: new URL("themes/dark-full-theme.js", BASE_URL).href,
  };

  const THEME_LABELS = {
    system: "System",
    original: "Original",
    darkClassic: "Dark Classic",
    darkFull: "Dark Full",
  };

  function getSystemTheme() {
    return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "darkFull"
    : "original";
  }

  function getSelectedTheme() {
    return localStorage.getItem(STORAGE_KEY) || "system";
  }

  function getEffectiveTheme(themeName) {
    return themeName === "system" ? getSystemTheme() : themeName;
  }

  function unwrapDarkMedia(css) {
    const mediaStart = css.search(
      /@media\s*\(\s*prefers-color-scheme\s*:\s*dark\s*\)\s*\{/i
    );

    if (mediaStart === -1) return css;

    const openBrace = css.indexOf("{", mediaStart);
        let depth = 1;
        let i = openBrace + 1;

        while (i < css.length && depth > 0) {
          if (css[i] === "{") depth++;
          if (css[i] === "}") depth--;
          i++;
        }

        const before = css.slice(0, mediaStart);
        const inside = css.slice(openBrace + 1, i - 1);
        const after = css.slice(i);

        return before + "\n" + inside + "\n" + unwrapDarkMedia(after);
      }

      window.SOGoThemeLoader = {
        applyTheme(css) {
          let finalCss = css || "";

          if (
            currentEffectiveTheme === "darkClassic" ||
            currentEffectiveTheme === "darkFull"
          ) {
            finalCss = unwrapDarkMedia(finalCss);
          }

          const style =
          document.getElementById(STYLE_ID) || document.createElement("style");

          style.id = STYLE_ID;
          style.textContent = finalCss;

          if (!style.parentNode) {
            document.head.appendChild(style);
          }
        },

        clearTheme() {
          document.getElementById(STYLE_ID)?.remove();
          document.getElementById(OLD_STYLE_ID)?.remove();
        },
      };

      function removeOldThemeScript() {
        document.querySelectorAll("#" + SCRIPT_ID).forEach((script) => {
          script.remove();
        });
      }

      function updateActiveMenuItem(themeName) {
        document.querySelectorAll(".sogo-theme-menu-item").forEach((item) => {
          item.style.fontWeight = item.dataset.theme === themeName ? "700" : "400";
          item.style.background =
          item.dataset.theme === themeName
          ? "rgba(255,255,255,0.14)"
          : "transparent";
        });
      }

      function applyTheme(themeName) {
        removeOldThemeScript();
        window.SOGoThemeLoader.clearTheme();
        updateActiveMenuItem(themeName);

        currentEffectiveTheme = getEffectiveTheme(themeName);

        if (currentEffectiveTheme === "original") return;

        const themeUrl = THEME_FILES[currentEffectiveTheme];

        if (!themeUrl) {
          console.error("[SOGo Theme] Unknown theme:", currentEffectiveTheme);
          return;
        }

        const script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.src = themeUrl + "?v=" + Date.now();

        script.onerror = function () {
          alert("Theme file could not be loaded:\n\n" + themeUrl);
        };

        document.head.appendChild(script);
      }

      function selectTheme(themeName) {
        localStorage.setItem(STORAGE_KEY, themeName);
        applyTheme(themeName);
      }

      function refreshSystemLabel() {
        const systemItem = document.querySelector(
          '.sogo-theme-menu-item[data-theme="system"]'
        );

        if (systemItem) {
          systemItem.textContent =
          "System (" +
          (getSystemTheme() === "darkFull" ? "Dark Full" : "Original") +
          ")";
        }
      }

      function createSelector() {
        if (document.getElementById(SELECTOR_ID)) return;

        const wrapper = document.createElement("div");
        wrapper.id = SELECTOR_ID;

        wrapper.style.cssText = `
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        margin-left: 4px;
        margin-right: 4px;
        z-index: 999999;
        `;

        const button = document.createElement("button");
        button.type = "button";
        button.title = "Select theme";

        button.style.cssText = `
        width: 40px;
        height: 40px;
        border: none;
        background: transparent;
        color: rgba(255,255,255,0.9);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        border-radius: 50%;
        `;

        button.innerHTML = `
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
        fill="currentColor"
        d="M12 3a9 9 0 0 0 0 18h.75a2.25 2.25 0 0 0 1.59-3.84 1.25 1.25 0 0 1 .88-2.13H17a4 4 0 0 0 4-4C21 6.58 16.97 3 12 3Zm-5 9.25A1.25 1.25 0 1 1 7 9.75a1.25 1.25 0 0 1 0 2.5Zm2.5-4A1.25 1.25 0 1 1 9.5 5.75a1.25 1.25 0 0 1 0 2.5Zm5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm2.5 4A1.25 1.25 0 1 1 17 9.75a1.25 1.25 0 0 1 0 2.5Z"
        />
        </svg>
        `;

        const menu = document.createElement("div");
        menu.id = MENU_ID;

        menu.style.cssText = `
        display: none;
        position: absolute;
        top: 42px;
        right: 0;
        min-width: 170px;
        background: #252525;
        color: #ffffff;
        border: 1px solid rgba(255,255,255,0.22);
        border-radius: 8px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.45);
        overflow: hidden;
        z-index: 1000000;
        font-family: sans-serif;
        font-size: 13px;
        `;

        Object.entries(THEME_LABELS).forEach(([themeName, label]) => {
          const item = document.createElement("button");
          item.type = "button";
          item.className = "sogo-theme-menu-item";
          item.dataset.theme = themeName;
          item.textContent = label;

          item.style.cssText = `
          display: block;
          width: 100%;
          padding: 9px 12px;
          border: none;
          background: transparent;
          color: #ffffff;
          text-align: left;
          cursor: pointer;
          font-size: 13px;
          `;

          item.addEventListener("mouseenter", function () {
            if (item.dataset.theme !== getSelectedTheme()) {
              item.style.background = "rgba(255,255,255,0.08)";
            }
          });

          item.addEventListener("mouseleave", function () {
            updateActiveMenuItem(getSelectedTheme());
          });

          item.addEventListener("click", function () {
            selectTheme(themeName);
            menu.style.display = "none";
          });

          menu.appendChild(item);
        });

        button.addEventListener("click", function (event) {
          event.stopPropagation();
          refreshSystemLabel();
          updateActiveMenuItem(getSelectedTheme());
          menu.style.display = menu.style.display === "none" ? "block" : "none";
        });

        document.addEventListener("click", function () {
          menu.style.display = "none";
        });

        wrapper.appendChild(button);
        wrapper.appendChild(menu);

        function isVisible(element) {
          const rect = element.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0;
        }

        function findPowerButton() {
          const candidates = document.querySelectorAll(
            "button, a, .md-button, md-icon"
          );

          for (const element of candidates) {
            if (!isVisible(element)) continue;

            const rect = element.getBoundingClientRect();
            if (rect.top > 90) continue;
            if (rect.left < window.innerWidth * 0.7) continue;

            const text = (
              element.outerHTML +
              " " +
              (element.getAttribute("aria-label") || "") +
              " " +
              (element.getAttribute("title") || "") +
              " " +
              (element.getAttribute("ui-sref") || "") +
              " " +
              (element.getAttribute("href") || "") +
              " " +
              (element.getAttribute("md-svg-icon") || "")
            ).toLowerCase();

            if (
              text.includes("logout") ||
              text.includes("logoff") ||
              text.includes("power") ||
              text.includes("abmelden") ||
              text.includes("disconnect")
            ) {
              return element.closest("button, a, .md-button") || element;
            }
          }

          return null;
        }

        function placeSelector() {
          const powerButton = findPowerButton();

          if (powerButton && powerButton.parentNode) {
            powerButton.parentNode.insertBefore(wrapper, powerButton);
            return true;
          }

          const toolbar =
          document.querySelector("md-toolbar") ||
          document.querySelector(".md-toolbar");

          if (toolbar) {
            toolbar.appendChild(wrapper);
            return true;
          }

          return false;
        }

        let tries = 0;

        const timer = setInterval(function () {
          tries++;

          if (placeSelector() || tries > 40) {
            clearInterval(timer);
          }
        }, 300);

        refreshSystemLabel();
        updateActiveMenuItem(getSelectedTheme());
      }

      function init() {
        createSelector();
        applyTheme(getSelectedTheme());

        if (window.matchMedia) {
          const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

          mediaQuery.addEventListener("change", function () {
            refreshSystemLabel();

            if (getSelectedTheme() === "system") {
              applyTheme("system");
            }
          });
        }
      }

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
      } else {
        init();
      }
  })();
