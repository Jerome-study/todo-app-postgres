import { useFetch } from "../hooks/useFetch"
import { RedirectLoading } from "../loading/Redirect";

export const ProfileComponent = () => {
    const { data, loading, error } = useFetch("/api/getUser");

    if (error) return <h1>Something went wrong</h1>
    if (loading) return <RedirectLoading />

    return(
        <div className="lg:max-w-screen-xl lg:mx-auto lg:px-5">
            <h1 className="text-white text-3xl text-center md:text-5xl lg:text-7xl font-black">Profile</h1>
            <div className="mt-12 grid gap-5">
                <div className="border-y border-rose-600 py-7">
                    <h1 className="text-white text-xl lg:text-4xl font-black">Username: <span className="font-semibold text-slate-700">{data?.username}</span></h1>
                </div>
                <div className="border-y border-rose-600 py-7">
                    <h1 className="text-white text-xl lg:text-4xl font-black">Member Since: <span className="font-semibold text-slate-700">{data?.created_at.split("T")[0]}</span></h1>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-3 mt-12">
                    <button className="rounded-xl lg:col-span-6 bg-amber-100 hover:bg-amber-200 cursor-pointer py-5 px-3 text-center text-black text-xl font-black">Change Username</button>
                    <button className="rounded-xl lg:col-span-6 bg-rose-800 hover:bg-rose-700 cursor-pointer py-5 px-3 text-center text-white text-xl font-black">Change Password</button>
                </div>
            </div>
        </div>
    )
}