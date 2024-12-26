function Hero() {
    return (
        <div className="h-[calc(100vh-4rem)] bg-gray-900">
            <div className="flex items-center justify-evenly h-full">
                <div className='w-1/3'>
                    <h1 className="text-6xl font-bold text-slate-50 pb-0.5 tracking-wider">{"Hi, I'm Rohan"}</h1>
                    <h2 className="text-4xl font-bold text-gray-300 pb-3 tracking-wider">Programmer</h2>
                    <p className='text-gray-300 tracking-widest leading-loose'>Trying to make the world a better place
                        through positivity!</p>
                    <div className='flex space-x-8 pt-7'>
                        <button
                            className='bg-slate-100 text-slate-900 text-xl font-bold py-0.5 px-12 rounded tracking-wider'>Projects
                        </button>
                        <button
                            className='bg-slate-950 text-slate-100 text-xl font-bold py-0.5 px-12 rounded border border-gray-700 tracking-wider'>Contact
                        </button>
                    </div>
                </div>
                <div className="w-72 h-72 rounded-full overflow-hidden scale-125 border-2 border-gray-700">
                    <img src="src/assets/Profile.jpg" alt="Portrait" className="w-full h-full object-cover "/>
                </div>
            </div>

        </div>

    );
}

export default Hero;