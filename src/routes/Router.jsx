    // src/routes/Router.jsx
    import { createBrowserRouter } from "react-router-dom";
    import Home from "../pages/Home/Home";
    import { Projects } from "../pages/Projects/Projects";
    import Settings from "../pages/Settings/Settings";
    import { ProjectsDetails } from "../pages/ProjectsDetails/ProjectsDetails"
    import { EpicsDetails } from "../pages/EpicsDetails/EpicsDetails";
    import { StoriesDetails } from "../pages/StoriesDetails/StoriesDetails";
    import LoginPage from "../pages/Login/Login";
    import ProtectedRoute from "../pages/ProtectedRouter/ProtectedRoute"; // Importa el componente ProtectedRoute

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/login",
            element: <LoginPage />
        },
        {
            element: <ProtectedRoute />, // Agrupa las rutas protegidas aquí
            children: [
                {
                    path: "/my-projects",
                    element: <Projects />
                },
                {
                    path: "/my-projects/:projectId",
                    element: <ProjectsDetails />
                },
                {
                    path: "/my-projects/:projectId/:epicId",
                    element: <EpicsDetails />
                },
                {
                    path: "/my-projects/:projectId/:epicId/:storyId",
                    element: <StoriesDetails />
                },
                {
                    path: "/settings",
                    element: <Settings />
                }
            ]
        }
    ]);

    export default router;
