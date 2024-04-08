import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Authentication } from "../models/definition";
import { instance } from "../utils/utils";
export const SignInComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm<Authentication>();
    const [loading, setLoading] = useState(false);

    const onSubmit: SubmitHandler<Authentication> = async (data) => {
        setLoading(true)
        try {
            const response = await instance.post("/auth/login", {...data});
            setLoading(false);
            if (response.statusText === "OK" || response) return navigate("/user");
        } catch(error : any) {
            notify(error?.response.data.message);
            setLoading(false);
        }
    };

    const notify = (message : string) => {
        toast.dismiss();
        return errors.username? toast.error(errors.username.message, { toastId: 1 }) : 
        errors.password? toast.error(errors.password.message, { toastId: 2 }) : 
        message ? toast.error(message, { toastId: 3 }) : null
    }

    useEffect(() => {
        if (location.state) toast.success("registered", { toastId: 1});
        navigate(location.pathname, {})
    }, []);

    return(
        <>
            <div className="container max-w-screen-md lg:bg-slate-950 px-3 lg:px-12 lg:py-5 lg:rounded-2xl h-full">
                <div className="w-full">
                    <h1 className="text-white text-4xl font-black text-center">Sign In</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-6">
                        <div className="relative">
                            <input disabled={loading} type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-slate-900 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " 
                                {...register("username", { required: "Username field is required!"})}
                            />
                            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-transparent px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Username</label>
                        </div>
                        <div className="relative">
                            <input disabled={loading} type="password" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-slate-900 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " 
                                {...register("password", { required: "Password field is required!"})}
                            />
                            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-transparent px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
                        </div> 
                        <div>
                            <button disabled={loading} className="bg-rose-800 text-white rounded-2xl w-full py-3 hover:bg-rose-700">Login</button>
                        </div>
                        <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}