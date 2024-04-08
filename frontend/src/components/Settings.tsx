import { useState } from "react";
import { Modal } from "./Modal/Modal";
import { toast } from "react-toastify";
import { instance } from "../utils/utils";

export const SettingsComponent = () => {
    const [logoutModal, setLogoutModal] = useState(false);
    const [deleteAccountModal, setDeleteAccountModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const logout = async () => {
        setLoading(true)
        try {
            await instance.post("/auth/logout");
            setLoading(false)
            window.location.href = "/";
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
            window.location.href = "/";
        } catch(error) {
            setLoading(false)
            toast.error("Somethin went wrong, Try again!", { toastId: 2});
        }
    }

    return(
        <div className="relative">
            <div className="lg:max-w-screen-xl lg:mx-auto px-3 py-5">
                <h1 className="font-black text-5xl text-white text-center">Settings</h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-3 mt-12">
                    <button onClick={() => setLogoutModal(prev => !prev)} className="rounded-xl lg:col-span-6 bg-amber-100 hover:bg-amber-200 cursor-pointer py-5 px-3 text-center text-black text-xl font-black ">Logout</button>
                    <button onClick={() => setDeleteAccountModal(prev => !prev)} className="rounded-xl lg:col-span-6 bg-rose-800 hover:bg-rose-700 cursor-pointer py-5 px-3 text-center text-white text-xl font-black ">Delete Account</button>
                </div>
            </div>    
            {logoutModal && <Modal action={"logout"} loading={true} setState={setLogoutModal} handleClick={logout} />}   
            {deleteAccountModal && <Modal action={"delete"} setState={setDeleteAccountModal} handleClick={deleteUser} loading={loading} /> }     
        </div>
        
    )
}