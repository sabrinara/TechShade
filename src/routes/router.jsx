import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/layout/Root/Root';
import ErrorPage from '../components/layout/ErrorPage/ErrorPage';
import Home from '../components/page/Home/Home';
import Login from '../components/page/Login/Login';
import Register from '../components/page/Register/Register';
import Service from '../components/page/Home/Services/ServiceDetail/Service';
import PrivateRouters from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('./data.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/service/:id",
                element:<PrivateRouters><Service></Service></PrivateRouters>,
                loader: () => fetch('./data.json')
                
            }
        ]
    }
]);

export default router;