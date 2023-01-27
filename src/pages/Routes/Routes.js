import { createBrowserRouter } from "react-router-dom";
import AllUser from "../../dashboardlayout/allusers/AllUser";
import DashboardLayout from "../../dashboardlayout/DashboardLayout";
import DisplayError from "../../dashboardlayout/displayError/DisplayError";
import DoctorsAdmin from "../../dashboardlayout/doctorsadmin/DoctorsAdmin";
import ManageDoctors from "../../dashboardlayout/managedoctors/ManageDoctors";
import MydashBoard from "../../dashboardlayout/MydashBoard/MydashBoard";
import Payment from "../../dashboardlayout/payment/Payment";
import Main from "../../Layout/Main";
import Dashboard from "../dasgboard/dashboard/Dashboard";
import Home from "../Home/Home";
import Login from "../Login/Login";
import MakeApoitment from "../makeApoitment/makeAppoitment/MakeApoitment";
import RouteAdmin from "../private/adminroute/RouteAdmin";
import PrivateRoute from "../private/PrivateRoute";
import SignUp from "../signup/SignUp";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup', element:<SignUp></SignUp>
            },
            {
                path:'/appoitment',
                element:<MakeApoitment></MakeApoitment>            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute>
                    <DashboardLayout></DashboardLayout>,
                </PrivateRoute>,
                errorElement:<DisplayError></DisplayError>,
                children:[
                    {
                        path:'/dashboard',
                        element:<MydashBoard></MydashBoard>
                    },
                    {
                        path:'/dashboard/allusers',
                        element:<RouteAdmin><AllUser></AllUser></RouteAdmin>
                    },
                    {
                        path:'/dashboard/doctor',
                        element:<RouteAdmin><DoctorsAdmin></DoctorsAdmin></RouteAdmin>
                    },
                    {
                        path:'/dashboard/managedoctors',
                        element:<RouteAdmin><ManageDoctors></ManageDoctors></RouteAdmin>
                    },
                    {
                        path:'/dashboard/payment/:id',
                        element:<RouteAdmin><Payment></Payment></RouteAdmin>,
                        loader:({params})=> fetch(`http://localhost:5000/payment/${params.id}`)
                    },
                ]
    }
    
])

export default router;