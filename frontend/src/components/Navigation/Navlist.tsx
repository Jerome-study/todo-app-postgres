import { NavLink } from "react-router-dom";

export const Navlist = ({ list, shrink } : any) => {
    return(
        <>  
            <NavLink to={list.url} className={({ isActive }) =>`${isActive && "bg-slate-800 rounded-xl lg:rounded-none"} p-1.5 ease-out duration-75 lg:py-5  flex items-center gap-10 ${shrink && "lg:justify-center lg:p-0"}`}>
                {list.icons}
                <h1 className={`${shrink ? "lg:hidden" : "lg:block"} hidden font-black text-white text-2xl`}>{list.name}</h1>
            </NavLink>
        </>
    )
}