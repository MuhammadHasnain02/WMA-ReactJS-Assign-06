
function Navbar() {

    return (
        <nav className="bg-white/10 backdrop-blur-lg sticky top-0 z-20 rounded-2xl flex justify-between items-center px-8 py-3 shadow-lg">
            <div className="flex items-center gap-3 cursor-pointer">

                <div className="flex flex-row items-center justify-center bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full w-16 h-16 transition ease-in-out duration-500 hover:scale-105 cursor-pointer p-2 shadow-xl">
                    <i className="fa-regular fa-note-sticky text-[28px] text-gray-300"></i>
                </div>
                <span className="text-gray-200 text-xl md:text-[22px] font-extrabold">
                    Post <span className="text-indigo-300">Handler</span>
                </span>

            </div>

            <div className="hidden md:flex gap-6">
                <p className="text-white font-medium hover:text-indigo-400 transition-colors cursor-pointer">
                    <i className="fa-regular fa-house"></i>  Home
                </p>
                <p className="text-gray-300 font-medium hover:text-indigo-400 transition-colors cursor-pointer">
                    <i className="fa-regular fa-paper-plane"></i> Posts
                </p>
                <p className="text-gray-300 font-medium hover:text-indigo-400 transition-colors cursor-pointer">
                    <i className="fa-regular fa-chart-bar"></i> About
                </p>
            </div>
        </nav>
    )

}


export default Navbar