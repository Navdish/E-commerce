import SidebarLayout from "./layouts/SidebarLayout";
import { RouteObject } from 'react-router';
import Settings from "./pages/Settings";


const routes: RouteObject[] = [
    {
        path: '/',
        element: <SidebarLayout/>,
        children: [
            {
                path: 'setting',
                element: <Settings/>
            },
            {
                path: 'logout',
                element: <Settings/>
            }
        ]
    }
    
];

export default routes;