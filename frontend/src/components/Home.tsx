import { Link } from "react-router-dom"

export const HomeComponent = () => {
    return(
        <>
            <div className="h-screen flex justify-center items-center">
                <div>
                    <h1 className="text-slate-200 text-6xl md:text-7xl lg:text-8xl font-black text-center">Todo App</h1>
                    <div className="mt-5 lg:mt-8 grid lg:grid-cols-2 gap-3 w-50">
                        <button className="text-black text-2xl bg-amber-100 py-3 font-black rounded-lg hover:bg-amber-50">
                            <Link to={"/signIn"}>Sign In</Link>
                        </button>
                        <button className="text-white text-2xl bg-rose-800 py-3 font-black rounded-lg hover:bg-rose-700">
                            <Link to={"/demo"}>Demo Version</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}