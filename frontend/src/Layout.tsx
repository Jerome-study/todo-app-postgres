import { useLocation } from "react-router-dom";
import { NavigationBar } from "./components/Navigationbar";
import { PathRouter } from "./Routes";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export const Layout = () => {
    const location = useLocation();
    const [shrink, setShrink] = useState(false)
    const isValid = location.pathname.includes("user") || location.pathname.includes("profile");
    return(
        <>
            <div className={`${isValid && `lg:grid lg:grid-cols-12`}`}>
            { isValid &&  
                <div className={`bg-slate-900 ${shrink ? "max-w-80" : "lg:col-span-3"} relative`}>
                    <div className='fixed bottom-0 lg:sticky lg:top-1/4 w-full bg-slate-900'>
                        <div onClick={() => setShrink(prev => !prev)} className="transition-all h-20 w-10 bg-slate-800 absolute right-0 top-1/2 text-white flex justify-center items-center rounded-e-full my-auto" style={{ marginRight: "-40px"}}>
                            {shrink? <FaArrowRight /> : <FaArrowLeft />  }
                        </div>
                        <NavigationBar shrink={shrink} />
                    </div>
                </div>
            }
            <div className={`${shrink ? "lg:col-span-11" : "lg:col-span-9"}`}>
                <PathRouter />
            </div>
            </div>
        </>
    )
}


