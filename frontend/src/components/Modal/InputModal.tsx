export const InputModal = ({ action, value, setState, handleClick, loading, setEditedTitle } : any) => {
    return(
        <>
            <div className="backdrop-brightness-50 h-screen absolute inset-0 flex items-center justify-center">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={() => setState((prev : boolean) => !prev)} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-4 md:p-5 text-center grid gap-5">
                           <h1 className="text-white font-black text-2xl">{action}</h1>
                            <input type="text" value={value} onChange={(e) => setEditedTitle(e.target.value)} className="rounded-xl py-3 px-2 w-full" />
                           <div className="grid gap-4">
                                <button className="w-full bg-amber-100 hover:bg-amber-200 rounded-xl py-3 font-black" disabled={loading} onClick={handleClick}>Update</button>
                                <button className="w-full bg-rose-800 hover:bg-rose-700 rounded-xl py-3 text-white font-black" disabled={loading} onClick={() => {setState((prev : boolean) => !prev)}} >Cancel</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}