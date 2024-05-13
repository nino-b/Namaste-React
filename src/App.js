import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Contact from "./components/Contact.js";
import ErrorComp from "./components/ErrorComp.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";



const Grocery = lazy(() => import('./components/Grocery.js'));
const About = lazy(() => import('./components/About.js'));

const AppLayout = () => {

    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name: 'Nino B.'
        };
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
           <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: (<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>)
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>)
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: (<Suspense fallback={<h1>Loading...</h1>}><Cart/></Suspense>)
            },
        ],
        errorElement: <ErrorComp/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);