function Navbar() {
    return (
        <nav className="sticky top-0 bg-gray-900 text-white border-b border-gray-700 z-50">
            <div className="mx-auto px-14 py-3.5 flex justify-between items-center">
                <a href="/public" className="text-2xl font-bold">Personal</a>
                <svg className='hover:fill-slate-50 hover:fill-opacity-0 transition ease-in-out duration-300' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M23.4 15.8596C22.4225 16.156 21.3855 16.3154 20.3112 16.3154C14.4417 16.3154 9.68351 11.5573 9.68351 5.68775C9.68351 4.61393 9.84277 3.57731 10.139 2.60022C5.7759 3.92338 2.6001 7.97685 2.6001 12.7721C2.6001 18.6416 7.35827 23.3997 13.2278 23.3997C18.0235 23.3997 22.0772 20.2233 23.4 15.8596Z"
                        stroke="#F8FAFC" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
            </div>
        </nav>
    );
}

export default Navbar;