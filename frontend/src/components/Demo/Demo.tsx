import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import  List  from "./List";

export const DemoComponent = () => {
    const [todos, setTodos] = useState<any>([]);
    const [title, setTitle] = useState<string>("");
    
    const addTodo = () => {
        if (!title) return toast("Please put a todo title!");
        const newTodo = {
            title,
            created_At: new Date().toLocaleDateString(),
            id: todos.length
        }
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        setTitle("");
    };

    const deleteTodo = useCallback((id : number) => {
        const filteredArray = todos.filter((todo : any) => {
            if (todo.id === id) return false
            return true
        });
        setTodos(filteredArray);
    }, [todos]);
    
    return(
        <>
            <div className="container max-w-screen-md px-5 sm:px-0">
                <div>
                    <h1 className="text-rose-300 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">Demo Version</h1>
                    <div className="p-5 my-5 bg-amber-100 rounded-2xl">
                        <p className="font-medium text-xl lg:text-2xl">This is only a <span className="font-black">demo version </span>
                            If you want more features, login or create an account if you don't have one!
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-4 gap-5 items-center mt-8">
                        <div className="lg:col-span-3">
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" maxLength={20} className="font-black w-full rounded-lg px-3 py-3" />
                        </div>
                        <div className="lg:col-span-1">
                            <button className="text-white w-full font-black bg-rose-800 hover:bg-rose-700 w-full rounded-lg p-3" onClick={addTodo}>Add</button>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h1 className="text-rose-100 font-black text-4xl">Todos</h1>
                    <div className="mt-5 grid gap-5 lg:gap-11 pr-3 py-5 max-h-80 overflow-auto">
                        {!todos.length && 
                            <p className="text-center text-gray text-zinc-400">List is Empty</p>
                        }
                        {todos.map((todos: any, index : number) => {
                            return(
                                <List key={index} data={todos} deleteTodo={deleteTodo} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}