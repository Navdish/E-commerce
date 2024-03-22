import SidebarLayout from "./layouts/SidebarLayout";
import { RouteObject } from 'react-router';
import Settings from "./pages/Settings";
import AllProduct from "./pages/AllProduct";
import AddProduct from "./pages/AddProduct";


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
            },
            {
                path: 'all_products',
                children: [
                    {
                        path: '',
                        element: <AllProduct/>
                    },
                    {
                        path: 'add_product',
                        element: <AddProduct/>
                    }
                ]
            },
        ]
    }
    
];

export default routes;