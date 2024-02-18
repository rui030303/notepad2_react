import {createBrowserRouter} from 'react-router-dom'
import Layout from '../pages/Layout'
import New from '../pages/New'
import Year from '../pages/Year'
import Month from '../pages/Month'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Month/>
            },
            {
                path:'/year',
                element:<Year/>
            },
            {
                path:'/month',
                element:<Month/>
            }
        ]
    },
    {
        path:'/notepad2_react',
        element:<Layout/>,
        
    },
    {
        path:'/new',
        element:<New/>
    }
])

export default router