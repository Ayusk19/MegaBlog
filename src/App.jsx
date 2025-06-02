/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect, useCallback } from "react";
import "./App.css";


import { useDispatch } from "react-redux";
import authService from "./lib/appwrite";
import {login, logout} from "./store/authSlice";
import {Footer, Header} from "./components"

function App() {

    const [Loading, setLoading] = useState(true)
    const dispatch = useDispatch()


    useEffect(()=> {
        authService.getCurrentUser()
        .then((userData)=> {
            if (userData) {
                dispatch((login({userData})))
            } else {
                dispatch(logout())
            }
        })
        .finally(() => setLoading(false))
    }, [dispatch])



return !Loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">

    <Header />
    <main>

    {/* <Outlet /> */}

    </main>
    <Footer />

        </div>

    </div>
) : null

}

export default App;
