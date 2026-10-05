import React from "react";

import { type RenderBodyArgs } from "gatsby";

import { themeAtomKey } from "../../src/hooks/use-theme";

const fontsHref =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap";

const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setPreBodyComponents,
}: RenderBodyArgs) => {
  setHeadComponents([
    React.createElement("link", {
      key: "fonts-preconnect",
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    }),
    React.createElement("link", {
      key: "fonts-preconnect-static",
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    }),
    React.createElement("link", {
      key: "fonts",
      rel: "stylesheet",
      href: fontsHref,
    }),
  ]);

  setPreBodyComponents([
    React.createElement("script", {
      key: "inline",
      dangerouslySetInnerHTML: {
        __html: `
          void function() {
            var cachedMode;

            try {
              var preferredTheme = JSON.parse(localStorage.getItem("${themeAtomKey}"));

              if (preferredTheme && preferredTheme.mode) {
                cachedMode = preferredTheme.mode;
              }
            } catch (err) { }

            function setTheme(newTheme) {
              document.documentElement.className = newTheme;
            }

            var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

            setTheme(cachedMode || (darkQuery.matches ? "dark" : "light"));
          }()
        `,
      },
    }),
  ]);

  setHtmlAttributes({ lang: "en" });
};

export { onRenderBody };
