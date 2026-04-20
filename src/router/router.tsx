import { createBrowserRouter } from "react-router";

import LandingPage from "../pages/landingPage/LandingPage.tsx";
import Contact from "../pages/contact/Contact.tsx";
import PrivacyPolicy from "../pages/privacy/privacy.tsx";
import Terms from "../pages/terms/Terms.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
]);
