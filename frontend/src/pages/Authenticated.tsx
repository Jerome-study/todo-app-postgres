import { Navigate, Outlet } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const Authenticated = () => {
    const { data, loading, error } = useFetch("/isLoggedIn");

    if (error) return <h1>Something went wrong</h1>
    if (loading) return <div className="w-full h-screen bg-slate-900"></div>
    
    return(
        <>
            {data?.message ? <Navigate to={"/user"}/> : <Outlet />}
        </>
    )
}