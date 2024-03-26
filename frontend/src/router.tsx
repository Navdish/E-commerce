import SidebarLayout from "./layouts/SidebarLayout";
import { RouteObject } from 'react-router';
import Settings from "./pages/Settings";
import AllProduct from "./pages/AllProduct";
import AddProduct from "./pages/AddProduct";
import OrderList from "./pages/OrderList";
import OrderDetails from "./pages/OrderDetails";


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
            {
                path: 'order_list',
                children: [
                    {
                        path: '',
                        element: <OrderList />
                    },
                    {
                        path: 'order_details',
                        element: <OrderDetails/>
                    }
                ]            
            }
        ]
    }
    
];

export default routes;