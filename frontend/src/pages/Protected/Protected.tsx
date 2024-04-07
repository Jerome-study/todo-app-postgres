import { useFetch } from "../../hooks/useFetch";
import { Layout } from "./Layout";
import { Navigate } from "react-router-dom";
import { RedirectLoading } from "../../loading/Redirect";

export const Protected = () => {
    const { data, loading, error } = useFetch("/isLoggedIn");
    
    
    if (error) return <h1>Something went wrong</h1>
    if (loading) return <RedirectLoading />

    return(
        <>
            {data?.message ? <Layout /> :  <Navigate to="/signin" />}
        </>
    )
}

