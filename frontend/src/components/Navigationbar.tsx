import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const NavigationBar = ({ shrink } : any) => {
    
    return(
        <>
            <div className="py-2 px-12 lg:px-0 lg:flex lg:h-5/6 lg:items-center">
                <div className="flex justify-between lg:gap-7 lg:flex-col w-full">
                    <NavLink to={"/user"} className={({ isActive }) =>`${isActive && "bg-slate-800 p-1.5 rounded-xl lg:rounded-none"} lg:py-5 px-3 flex items-center gap-10 ${shrink && "lg:justify-center lg:p-0"}`}>
                        <FaHome color="#fff" size={"1.8rem"}/>
                        <h1 className={`${shrink ? "lg:hidden" : "lg:block"} hidden font-black text-white text-2xl`}>Home</h1>
                    </NavLink>
                    
                    <NavLink to={"/profile"} className={({ isActive }) =>`${isActive && "bg-slate-800"} lg:py-5 px-3 flex items-center gap-10  ${shrink && "lg:justify-center lg:p-0"} `}>
                        <CgProfile color="#fff" size={"1.8rem"}/>
                        <h1 className={`${shrink ? "lg:hidden" : "lg:block"} hidden font-black text-white text-2xl`}>Profile</h1>
                    </NavLink>
                    
                    <div className={` ${shrink && "lg:justify-center"} lg:py-5 px-3 flex items-center gap-10`}>
                        <IoSettingsSharp color="#fff" size={"1.8rem"}/>
                        <h1 className={`${shrink ? "lg:hidden" : "lg:block"} hidden font-black text-white text-2xl`}>Settings</h1>
                    </div>
                </div>
            </div>
        </>
    )
}