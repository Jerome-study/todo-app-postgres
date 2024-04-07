import { Link } from "react-router-dom"

export const HomeComponent = () => {
    return(
        <>
            <div>
                <div>
                    <h1 className="text-slate-200 text-6xl md:text-7xl lg:text-8xl font-black text-center">Todo App</h1>
                    <div className="mt-5 lg:mt-8 grid lg:grid-cols-2 gap-3 w-50">
                        <Link to="/signin">
                            <button className="text-black text-2xl bg-amber-100 w-full p-3 font-black rounded-lg hover:bg-amber-50">
                                Sign In
                            </button>
                        </Link>
                        <Link to="/demo">
                            <button className="text-white text-2xl bg-rose-800 p-3 w-full font-black rounded-lg hover:bg-rose-700">
                                Demo Version
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}