import { useFetch } from "../../hooks/useFetch";
import { memo } from "react";
import { ListContainer } from "./ListContainer";
import { RedirectLoading } from "../../loading/Redirect";


const UserHomeComponent = () => {
    const { data, loading, error } = useFetch("/api/getUser");
    
    if (error) {
        return <h1 className="text-white">Something Went Wrong</h1>
    }

    if (loading) return <RedirectLoading />
    
    return(
        <>
            <div className="lg:max-w-screen-lg lg:px-10 xl:px-0 mx-auto">
                <h1 className="text-white font-black text-center text-4xl">Welcome Back {data?.username} 😎</h1>
                <h1 className="text-white text-3xl mt-10 font-black">Task</h1>
                <ListContainer />
            </div>
        </>
    )
}

export default memo(UserHomeComponent)