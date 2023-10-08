
import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/layout/Root/Root';
import ErrorPage from '../components/layout/ErrorPage/ErrorPage';
import Home from '../components/page/Home/Home';
import Login from '../components/page/Login/Login';
import Register from '../components/page/Register/Register';
import Services from '../components/page/Home/Services/Services';

const router = createBrowserRouter ([
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
                path: '/services/:id',
                element:<Services></Services>,
                loader: () => fetch('./data.json')
            }
        ]
    }
]);

export default router;