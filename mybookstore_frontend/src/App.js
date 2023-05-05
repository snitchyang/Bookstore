import './App.css';
import {Component, useEffect, useReducer, useRef} from "react";
import Layout from "./view/layout";
import {createBrowserRouter, RouterProvider, Navigate, redirect} from "react-router-dom";
import BookView from "./view/bookView";
import CartView from "./view/cartView";
import OrderView from "./view/orderView";
import ProfileView from "./view/profileView";
import BookDetails from "./view/bookDetails";
import Login from "./view/loginView";
import {useState} from "react";
import Authentication from "./component/authentication";
import loginView from "./view/loginView";
import RegisterView from "./view/registerView";

function App() {
    const userStateStored = sessionStorage.getItem('user')
    const [user, setUser] = useState(userStateStored || 'null')
    //store user state in sessionStorage
    useEffect(()=>{
        if(userStateStored !== user){
            router.navigate('/books')
            sessionStorage.setItem('user', user)
        }
    }, [user])
    const login = (username) => {
        setUser(username)
    }
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Authentication user={user}><Layout/></Authentication>,
            children: [
                {
                    index: true,
                    element: <Navigate to='/login'/>
                },
                {
                    path: 'books',
                    element: <BookView/>
                },
                {
                    path: 'cart',
                    element: <CartView/>
                },
                {
                    path: 'orders',
                    element: <OrderView/>
                },
                {
                    path: 'profile',
                    element: <ProfileView/>
                },
                {
                    path: 'books/:bookName',
                    element: <BookDetails/>
                }
            ]
        },
        {
            path: '/login',
            element: <Login setLoginState={login}/>
        },
        {
            path: '/register',
            element: <RegisterView />
        }
    ])

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
