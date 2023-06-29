import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsDetails from "../Layout/NewsDetails/NewsDetails";
import News from "../Pages/News/News";
import Login from "../Shared/Login/Login";
import Register from "../Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Category></Category>,
                loader: () => fetch(`http://localhost:5000/news`)
            },
            {
                path: 'category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'newsdetails',
        element: <NewsDetails></NewsDetails>,
        children: [
            {
                path: ':id',
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
                
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    }
])

export default router;