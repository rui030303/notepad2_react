import {createBrowserRouter} from 'react-router-dom'
import Layout from '../pages/Layout'
import New from '../pages/New'
import Year from '../pages/Year'
import Month from '../pages/Month'

const router = createBrowserRouter([
    {
        path:'/notepad2_react',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Month/>
            },
            {
                path:'/notepad2_react/year',
                element:<Year/>
            },
            {
                path:'/notepad2_react/month',
                element:<Month/>
            }
        ]
    },
    {
        path:'/notepad2_react/new',
        element:<New/>
    }
])

export default router