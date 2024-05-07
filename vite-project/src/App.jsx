import HomePage from './routes/homePage/HomePage'
import ListPage from './routes/listPage/ListPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './routes/layout/Layout';
import SinglePage from './routes/singlePage/SinglePage';
import Profilepage from './routes/profilePage/Profilepage';
import Login from './routes/login/Login';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage />
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<Profilepage/>
        },
        {
          path:"/login",
          element:<Login/>
        }


      ]
    }
  ]);
  return (
    <RouterProvider router={router} />

  )
}

export default App