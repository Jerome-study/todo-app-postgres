import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import { instance } from "../../utils/utils";
import { List } from "./List";
import { toast } from "react-toastify";
import { TodoList } from "../../models/definition";

export const ListContainer = () => {
    const { data, loading, error, refetch } = useFetch("/api/getTodos");
    const [input, setInput] = useState("");
    const [viewAll, setViewAll] = useState(false);

    const addTodo = async () => {
        toast.dismiss();
        if (!input) return toast("Put a title", { toastId: 1})
        try {
            await instance.post("/api/addTodo", { title: input});
            setInput("");
            refetch();
            toast.success("Todo Added!", { toastId: 2});
        } catch(error: any) {
            console.log(error.response.data.message);
        }
    };

    if (error) return <h1>Something went wrong</h1>
    
    return(
        <>
            <div className="grid sm:grid-cols-12 gap-2 mt-5 items-center">
                <div className="sm:col-span-8 lg:col-span-10">
                    <input disabled={loading} value={input} onChange={(e) => setInput(e.target.value)} type="text" maxLength={20} className="font-black w-full rounded-lg px-3 py-3" />
                </div>
                <div className="sm:col-span-4 lg:col-span-2">
                    <button disabled={loading} onClick={addTodo} className="text-white w-full font-black bg-rose-800 hover:bg-rose-700 w-full rounded-lg p-3">Add</button>
                </div>
            </div>
                {!loading &&
                    <div className="pb-12">
                        <div className={`mt-8 pb-3 grid gap-7 ${viewAll? "max-h-full" : "max-h-96"} overflow-auto`}>
                            {!data?.length ? 
                                <p className="text-center text-slate-600 font-black">No list 😔</p>
                            :
                                data.map((todo : TodoList) => {
                                    return(
                                        <List key={todo?.id} todo={todo} refetch={refetch}/>
                                    )
                                })
                            }
                            
                        </div>
                        {data?.length >=5 ? 
                            <div className={`rounded-lg text-center text-white w-full ${viewAll && "mb-15 lg:mb-0"}`} onClick={() => setViewAll(prev => !prev)}>
                                <h1 className="text-white font-black bg-slate-900 py-1 rounded-xl">{viewAll? "Shrink" : "View All"}</h1>
                            </div> 
                            : 
                            null
                        }
                    </div>
                }
            </>
    )
}
