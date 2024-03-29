import SidebarLayout from "./layouts/SidebarLayout";
import { RouteObject } from 'react-router';
import Settings from "./pages/Settings";
import AllProduct from "./pages/AllProduct";
import AddProduct from "./pages/AddProduct";
import OrderList from "./pages/OrderList";
import OrderDetails from "./pages/OrderDetails";
import MyOrderList from "./pages/MyOrderList";
import MyOrderDetails from "./pages/MyOrderDetails";
import Home from "./pages/Home";
import Signup from "./pages/SignUp";
import BaseLayout from "./layouts/BaseLayout";
import Login from "./pages/Login";


const routes: RouteObject[] = [
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'login',
                element: <Login />
            },
            {

            path: '',
            element: <SidebarLayout />,
            children: [
                {
                    path: 'setting',
                    element: <Settings />
                },
                
                {
                    path: '',
                    element: <Home />
                },
                {
                    path: 'logout',
                    element: <Settings />
                },
                {
                    path: 'all_products',
                    children: [
                        {
                            path: '',
                            element: <AllProduct />
                        },
                        {
                            path: 'add_product',
                            element: <AddProduct />
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
                            element: <OrderDetails />
                        }
                    ]
                },
                {
                    path: 'my_order',
                    children: [
                        {
                            path: '',
                            element: <MyOrderList />
                        },
                        {
                            path: 'my_order_details',
                            element: <MyOrderDetails />
                        }
                    ]
                }
            ]
        }]
    }

];

export default routes;