import { Navigate, Outlet } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { RedirectLoading } from "../loading/Redirect";

export const Authenticated = () => {
    const { data, loading, error } = useFetch("/isLoggedIn");

    if (error) return <h1>Something went wrong</h1>
    if (loading) return <RedirectLoading />
    
    return(
        <>
            {data?.message ? <Navigate to={"/user"}/> : <Outlet />}
        </>
    )
}