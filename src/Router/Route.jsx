import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CardsDetails from "../Pages/CardsDetails/CardsDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
               path : "/",
               element : <Home></Home>,
               loader : () => fetch('../card.json') 
            },
            {
               path : "/donation",
               element : <Donation></Donation>
            },
            {
               path : "/statistics",
               element : <Statistics></Statistics>
            },
            {
                path : "/card/:id",
                element : <CardsDetails></CardsDetails>,
                loader : () => fetch('../card.json')
            }
        ]
    }
])

export default myCreatedRoute;