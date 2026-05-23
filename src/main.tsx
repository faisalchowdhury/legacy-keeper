import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { router } from "./router/router.tsx";
import { LanguageProvider } from "./i18n/LanguageContext.tsx";
import { AudioProvider } from "./context/AudioContext.tsx";

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <AudioProvider>
      <RouterProvider router={router} />
    </AudioProvider>
  </LanguageProvider>,
);
