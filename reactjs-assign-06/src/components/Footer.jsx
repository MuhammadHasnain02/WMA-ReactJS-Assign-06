

function Footer() {
    

    return (
    <footer className="flex flex-row items-center justify-between px-15 py-5 text-gray-200 bg-white/10 backdrop-blur-lg rounded-2xl text-center text-[16px] border-t border-white/20">
        
        <p className="text-gray-100">© 2025 Post Handler | All rights reserved</p>
        <div className="flex gap-4 mt-2">
            <a target="_blank" href="https://www.facebook.com" className="hover:text-white text-[21px]">
                <i className="fa-brands fa-facebook"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com" className="hover:text-white text-[21px]">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a target="_blank" href="https://x.com" className="hover:text-white text-[21px]">
                <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a target="_blank" href="https://www.youtube.com" className="hover:text-white text-[21px]">
                <i className="fa-brands fa-youtube"></i>
            </a>
        </div>
        
    </footer>
    )

}


export default Footer