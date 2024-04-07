import { Navlist } from "./Navlist"
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5"

const navigation = [
    {
        url: "/user",
        name: "Home",
        icons: <FaHome color="#fff" size={"1.8rem"}/>
    },
    {
        url: "/profile",
        name: "Profile",
        icons: <CgProfile color="#fff" size={"1.8rem"}/>
    },
    {
        url: "/settings",
        name: "Settings",
        icons: <IoSettingsSharp color="#fff" size={"1.8rem"}/>
    }
];

export const NavigationBar = ({ shrink } : any) => {
    return(
        <>
            <div className="py-2 px-12 lg:px-0 lg:flex lg:h-5/6 lg:items-center">
                <div className="flex justify-between lg:gap-7 lg:flex-col w-full">
                    {navigation.map((list,index) => {
                        return(
                            <Navlist key={index} shrink={shrink} list={list} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}