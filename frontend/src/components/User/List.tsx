import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { instance } from "../../utils/utils";
import { UserTodo } from "../../models/definition";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { InputModal } from "../Modal/InputModal";

export const List = ({ todo, refetch } : UserTodo) => {
    const [deleteModal, setShowDeleteModal] = useState(false);
    const [updateModal, setShowUpdateModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [edited_title, setEditedTitle] = useState<string>(todo.title)
    const deleteTodo = async () => {
        setLoading(true)
        try {
            await instance.delete(`/api/deleteTodo/${todo.id}`);
            refetch();
            toast.success("Todo Deleted!", { toastId: 1});
        } catch(error: any) {
            toast.error(error.response.data.message, { toastId: 1});
        } finally {
            setLoading(false);
        }
    };

    const updateTodo = async () => {
        if (todo.title.toLowerCase() === edited_title.toLowerCase()) return setShowUpdateModal(prev => !prev);
        setLoading(true)
        try {
            await instance.put(`/api/updateTodo/${todo.id}`, { edited_title });
            refetch();
            toast.success("Todo Updated!", { toastId: 1});
        } catch(error: any) {
            toast.error(error.response.data.message, { toastId: 1});
        } finally {
            setLoading(false);
        }
    };

    return(
        <>
            <div className="bg-slate-800  h-fit p-5 rounded-xl flex items-center justify-between">
                <h1 className="text-white font-black text-md break-all lg:text-xl">{todo?.title}</h1>
                <div className="flex items-center gap-2">
                    <MdDeleteForever onClick={() => setShowDeleteModal(prev => !prev)} color="rgb(159 18 57)" size={"2rem"} />
                    <FaEdit onClick={() => {setShowUpdateModal(prev => !prev), setEditedTitle(todo.title)}} color="rgb(255 251 235)" size={"1.5rem"}/>
                    <span className="text-slate-400">{todo?.created_at?.split("T")[0]}</span>
                </div>
            </div>
            { deleteModal && <Modal action={"delete"} setState={setShowDeleteModal} handleClick={deleteTodo} loading={loading} /> }
            { updateModal && <InputModal action={"update"} value={edited_title} setState={setShowUpdateModal} handleClick={updateTodo} loading={loading} setEditedTitle={setEditedTitle} /> }
        </>
    );
};