import { toast } from "react-toastify"
import { instance } from "../utils/utils"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export const SettingsComponent = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const logout = async () => {
        setLoading(true)
        try {
            await instance.post("/auth/logout");
            setLoading(false)
            navigate("/");
        } catch(error) {
            setLoading(false)
            toast.error("Somethin went wrong, Try again!", { toastId: 1});
        }
    };

    const deleteUser = async () => {
        setLoading(true)
        try {
            await instance.delete("/api/deleteUser");
            setLoading(false)
            navigate("/", { state: true});
        } catch(error) {
            setLoading(false)
            toast.error("Somethin went wrong, Try again!", { toastId: 2});
        }
    }
    return(
        <>
            <div className="lg:max-w-screen-xl lg:mx-auto lg:px-0">
                <h1 className="font-black text-5xl text-white text-center">Settings</h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-3 mt-12">
                    <button onClick={logout} className="rounded-xl lg:col-span-6 bg-amber-100 hover:bg-amber-200 cursor-pointer py-5 px-3 text-center text-black text-xl font-black " disabled={loading}>Logout</button>
                    <button onClick={deleteUser} className="rounded-xl lg:col-span-6 bg-rose-800 hover:bg-rose-700 cursor-pointer py-5 px-3 text-center text-white text-xl font-black " disabled={loading} >Delete Account</button>
                </div>
            </div>
        </>
    )
}