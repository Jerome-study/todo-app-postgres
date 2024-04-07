import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { instance } from "../../utils/utils";
import { UserTodo } from "../../models/definition";

export const List = ({ todo, refetch } : UserTodo) => {
    const deleteTodo = async () => {
        try {
            await instance.delete(`/api/deleteTodo/${todo.id}`);
            refetch();
            toast.error("Todo Deleted!", { toastId: 1});
        } catch(error: any) {
            toast.error(error.response.data.message, { toastId: 1});
        }
    };
    return(
        <>
            <div className="bg-slate-800  h-fit p-5 rounded-xl flex items-center justify-between">
            <h1 className="text-white font-black text-md break-all lg:text-xl">{todo?.title}</h1>
            <div className="flex items-center gap-2">
                <MdDeleteForever onClick={deleteTodo} color="rgb(159 18 57)" size={"2rem"} />
                <FaEdit color="rgb(255 251 235)" size={"1.5rem"}/>
                <span className="text-slate-400">{todo?.created_at?.split("T")[0]}</span>
            </div>
        </div>
        </>
    );
};