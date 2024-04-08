import { useState } from "react";
import { InputModal } from "../Modal/InputModal";
import { instance } from "../../utils/utils";
import { toast } from "react-toastify";
import { PasswordModal } from "../Modal/PasswordModal";

export const Details = ({ user, refetch } : any) => {
    const [updateUserModal, setUpdateUserModal] = useState(false);
    const [passwordModal, setPasswordModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [edited_username, setEditedUsername] = useState<string>(user?.username);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const updateUser = async () => {
        toast.dismiss();
        if (user.username.toLowerCase() === edited_username.toLowerCase()) return setUpdateUserModal(prev => !prev);
        setLoading(true)
        try {
          await instance.put("/api/updateUser", { edited_username });
          refetch();
          toast.success("Username Updated!", { toastId: 1});
        } catch(error: any) {
            toast.error(error?.response.data.message, { toastId: 2});
        } finally {
            setLoading(false);
        }
    }

    const updatePassword = async () => {
        if (!currentPassword || !newPassword ) return toast.error("All field is required!", { toastId: 1});
        if (currentPassword.length < 6 || newPassword.length < 6) return toast.error("Password need atleast 6 characters", { toastId: 2});
        try {
            await instance.put("/api/updatePassword", { currentPassword, newPassword});
            refetch();
            toast.success("Password Updated!", { toastId: 3});
        } catch(error : any) {
            toast.error(error?.response.data.message, { toastId: 4});
        }
    }

    return(
        <>
            <div className="border-y border-rose-600 py-7">
                <h1 className="text-white text-xl lg:text-4xl font-black">Username: <span className="font-semibold text-slate-700">{user?.username}</span></h1>
            </div>
            <div className="border-y border-rose-600 py-7">
                <h1 className="text-white text-xl lg:text-4xl font-black">Member Since: <span className="font-semibold text-slate-700">{user?.created_at.split("T")[0]}</span></h1>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-3 mt-12">
                <button onClick={ () => {setUpdateUserModal(prev => !prev), setEditedUsername(user.username)} } className="rounded-xl lg:col-span-6 bg-amber-100 hover:bg-amber-200 cursor-pointer py-5 px-3 text-center text-black text-xl font-black">Change Username</button>
                <button onClick={() => {setPasswordModal(prev => !prev), setNewPassword(""), setCurrentPassword("")}} className="rounded-xl lg:col-span-6 bg-rose-800 hover:bg-rose-700 cursor-pointer py-5 px-3 text-center text-white text-xl font-black">Change Password</button>
            </div>
            { updateUserModal && <InputModal action={"Update"} value={edited_username} setState={setUpdateUserModal} handleClick={updateUser} loading={loading} setEditedTitle={setEditedUsername} />}
            { passwordModal && 
                <PasswordModal 
                    action={"Change Password"} 
                    currentPassword={currentPassword} 
                    newPassword={newPassword} 
                    setState={setPasswordModal} 
                    handleClick={updatePassword} 
                    loading={loading}
                    setCurrentPassword={setCurrentPassword}
                    setNewPassword={setNewPassword} 
                />}
        </>
    )
}