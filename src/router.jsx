import { Children } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from './components/DefaultLayout';
import News from './components/News'
import Videos from './components/Videos'
import More from './components/More'
import OverallEventView from "./components/overallEventView";
import App from "./App";
import Images from "./components/Images";
const router = createBrowserRouter([
        {
            path:'/All',
            element:<Navigate to="/" />
        },
        {
            path:'/',
            element:<App/>
        },
        {
            path:'/Images',
            element:<Images/>
        },
        {
            path:'/News',
            element:<News/>
        },
        {
            path:'/Videos',
            element:<Videos/>
        },
        {
            path:'More',
            element:<More/>
        }
]);
export default router;