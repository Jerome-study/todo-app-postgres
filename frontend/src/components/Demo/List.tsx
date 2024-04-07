import { memo } from "react"
import { MdDeleteForever } from "react-icons/md";
import { Demo } from "../../models/definition";

export const List = ({ data, deleteTodo } : Demo ) => {
    return(
        <div className="bg-slate-800  h-fit p-5 rounded-xl flex items-center justify-between">
            <h1 className="text-white font-black text-md lg:text-xl">{data?.title}</h1>
            <div className="flex items-center gap-2">
                <MdDeleteForever onClick={() => deleteTodo(data?.id)} color="rgb(159 18 57)" size={"1.5rem"} />
            </div>
        </div>
    )
}

export default memo(List)