import { useFetch } from "../../hooks/useFetch"
import { RedirectLoading } from "../../loading/Redirect";
import { Details } from "./Details";

export const ProfileComponent = () => {
    const { data, loading, error, refetch } = useFetch("/api/getUser");
    if (error) return <h1>Something went wrong</h1>
    if (loading) return <RedirectLoading />

    return(
        <div className="lg:max-w-screen-xl lg:mx-auto lg:px-5">
            <h1 className="text-white text-3xl text-center md:text-5xl lg:text-7xl font-black">Profile</h1>
            <div className="mt-12 grid gap-5">
                <Details  user={data} refetch={refetch}/>
            </div>
        </div>
    )
}