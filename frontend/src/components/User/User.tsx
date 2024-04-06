import { useState } from "react"
import { List } from "./List"

export const UserHomeComponent = () => {
    const [viewAll, setViewAll] = useState(false);
    return(
        <>
            <div className="lg:max-w-screen-lg mx-auto">
                <h1 className="text-white font-black text-center text-4xl">Welcome Back Jerome!</h1>
                <h1 className="text-white text-3xl mt-10 font-black">Your Task</h1>
                <div className={`mt-12 grid gap-8 ${viewAll? "max-h-full" : "max-h-96"} overflow-auto`}>
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                </div>
                <button className={`text-white mt-3 ${viewAll && "mb-12 lg:mb-0"}`} onClick={() => setViewAll(prev => !prev)}>{viewAll? "Shrink" : "View All"}</button>
            </div>
            
        </>
    )
}