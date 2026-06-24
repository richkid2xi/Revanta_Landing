import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Contact from "../pages/contact/page";
import About from "../pages/about/page";
import Pricing from "../pages/pricing/page";
import Help from "../pages/help/page";
import Privacy from "../pages/privacy/page";
import Terms from "../pages/terms/page";
import Accessibility from "../pages/accessibility/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/accessibility",
    element: <Accessibility />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
