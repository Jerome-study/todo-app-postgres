import { useFetch } from "../../hooks/useFetch";
import { Layout } from "./Layout";
import { Navigate } from "react-router-dom";

export const Protected = () => {
    const { data, loading, error } = useFetch("/isLoggedIn");
    
    
    if (error) return <h1>Something went wrong</h1>
    if (loading) return <div className="w-full h-screen bg-slate-900"></div>

    return(
        <>
            {data?.message ? <Layout /> :  <Navigate to="/signin" />}
        </>
    )
}

