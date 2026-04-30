import { createBrowserRouter } from "react-router";

import LandingPage from "../pages/landingPage/LandingPage.tsx";
import Contact from "../pages/contact/Contact.tsx";
import PrivacyPolicy from "../pages/privacy/privacy.tsx";
import Terms from "../pages/terms/Terms.tsx";
import {
  DigitalWillPage,
  AssetManagementPage,
  FuneralWishesPage,
  ExecutorManagementPage,
  SecureAccessPage,
  DeviceStoragePage,
} from "../pages/AllFeaturePages.tsx";
import Affiliate from "../pages/Affiliate/Affiliate.tsx";

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
  {
    path: "/features/digital-will",
    element: <DigitalWillPage />,
  },
  {
    path: "/features/asset-management",
    element: <AssetManagementPage />,
  },
  {
    path: "/features/funeral-wishes",
    element: <FuneralWishesPage />,
  },
  {
    path: "/features/executor-management",
    element: <ExecutorManagementPage />,
  },
  {
    path: "/features/secure-access",
    element: <SecureAccessPage />,
  },
  {
    path: "/features/device-storage",
    element: <DeviceStoragePage />,
  },
  {
    path: "/affiliate",
    element: <Affiliate />,
  },
]);
