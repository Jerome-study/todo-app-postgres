import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavigationBar } from "../../components/Navigation/Navigationbar";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const Layout = () => {
    const [shrink, setShrink] = useState(false);

   return(
    <>
        <div className="lg:flex">
            <div className={`bg-slate-900 ${shrink ? "w-20" : "w-80"} relative ease-out duration-150`}>
                <div className='fixed bottom-0 lg:sticky lg:top-1/4 w-full bg-slate-900'>
                     <div onClick={() => setShrink(prev => !prev)} className="h-20 w-5 bg-slate-800 absolute right-0 top-1/2 text-white flex justify-center items-center rounded-e-full my-auto" style={{ marginRight: "-20px"}}>
                        {shrink? <FaArrowRight /> : <FaArrowLeft />  }
                    </div>
                    <NavigationBar shrink={shrink} />
                </div>
            </div>
            <div className={`w-full`}>
                <Outlet />
            </div>
        </div> 
    </>
   )
}