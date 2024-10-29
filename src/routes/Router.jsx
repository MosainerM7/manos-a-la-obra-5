import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import {Projects} from "../pages/Projects";
import Settings from "../pages/Settings";
import { ProjectsDetails } from "../pages/ProjectsDetails";
import { EpicsDetails } from "../pages/EpicsDetails";
import { StoriesDetails } from "../pages/StoriesDetails";
import LoginPage from "../pages/Login";
    const router = createBrowserRouter([
        {
            path: "/",
            element:(
                <Home></Home>
            )
        },

        {
            path: "/my-projects",
            element:(
                <Projects></Projects>
            )

        },

        {
            path: "/my-projects/:projectId", 
            element:(
                <ProjectsDetails></ProjectsDetails>
            )
        },
        {
            path: "/my-projects/:projectId/:epicId",
            element:(
                <EpicsDetails></EpicsDetails>
            )
        },

        {
            path:"/my-projects/:projectId/:epicId/:storyId",
            element:(
                <StoriesDetails></StoriesDetails>
            )
        },
        {
            path:"/login",
            element: (
                <LoginPage></LoginPage>
            )
        },
        {
            path:"/settings",
            element:(
                <Settings></Settings>
            )
        }

        














    ])


    export default router;