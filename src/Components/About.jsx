function About() {
    return (
        <div className='bg-gray-900'>
            <h1 className='text-slate-50 flex justify-center text-4xl font-semibold tracking-wider'>About Me</h1>
            <div className='px-36 py-5'>
                <div className='bg-gray-800 border-gray-700 border py-5 rounded-xl px-12 tracking-wider'>
                    <h2 className='text-slate-50 text-3xl font-semibold '>Rohan Raparla</h2>
                    <h3 className='text-gray-300 text-xl py-0.5 font-medium'>Full Stack Developer</h3>
                    <h4 className='text-gray-300 text-base leading-relaxed font-light'>Passionate about creating helpful
                        applications for myself and others.</h4>
                </div>
            </div>
            <div className='pb-4'>
                <div className='flex items-center px-36 space-x-3 py-3'>
                    <img src='src/assets/Code.svg' alt='Profile'/>
                    <h1 className='text-2xl font-bold text-slate-50 tracking-wider'>Skills & Technology</h1>
                </div>
                <div>
                    <ul className='flex space-x-3 px-36 py-3'>
                        <li className='border-gray-700 border rounded bg-gray-800 px-2 font-medium text-slate-50'>Java</li>
                        <li className='border-gray-700 border rounded bg-gray-800 px-2 font-medium text-slate-50'>Python</li>
                        <li className='border-gray-700 border rounded bg-gray-800 px-2 font-medium text-slate-50'>JavaScript</li>
                        <li className='border-gray-700 border rounded bg-gray-800 px-2 font-medium text-slate-50'>TypeScript</li>
                        <li className='border-gray-700 border rounded bg-gray-800 px-2 font-medium text-slate-50'>React</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center px-36 space-x-6 py-3'>
                <img src='src/assets/Education.svg' alt='Profile'/>
                <h1 className='text-2xl font-bold text-slate-50 tracking-wider'>Education</h1>
            </div>
            <div className='px-36 py-3'>
                <div className='bg-gray-800 border-gray-700 border py-5 rounded-xl px-12 tracking-wider'>
                    <h2 className='text-slate-50 text-xl font-semibold '>High School Degree</h2>
                    <h4 className='text-gray-300 text-base leading-relaxed font-light'>South Forsyth High School | 2025</h4>
                </div>
            </div>
        </div>
    );
}

export default About;