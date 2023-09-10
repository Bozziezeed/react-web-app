import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FrontLayout from "./components/layouts/FrontLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Team from "./pages/team/Team";
import Project from "./pages/project/Project";

const AppRoute = (Layout: any, Component: any) => (
  <Layout>
    <Component />
  </Layout>
);
const router = createBrowserRouter([
  {
    path: "/",
    element: AppRoute(FrontLayout, Home),
  },
  {
    path: "/about",
    element: AppRoute(FrontLayout, About),
  },
  {
    path: "/teams",
    element: AppRoute(FrontLayout, Team),
  },
  {
    path: "/projects",
    element: AppRoute(FrontLayout, Project),
  },
]);
function Routes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;
