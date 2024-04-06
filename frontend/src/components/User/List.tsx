import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export const List = () => {
    const date = new Date().toLocaleDateString();
    return(
        <>
            <div className="bg-slate-800  h-fit p-5 rounded-xl flex items-center justify-between">
            <h1 className="text-white font-black text-md lg:text-xl">Todo</h1>
            <div className="flex items-center gap-2">
                <MdDeleteForever color="rgb(159 18 57)" size={"2rem"} />
                <FaEdit color="rgb(255 251 235)" size={"1.5rem"}/>
                <span className="text-slate-400">{date}</span>
            </div>
        </div>
        </>
    );
};