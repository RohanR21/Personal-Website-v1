

function Contact() {
    return (
        <div id="Contact" className='bg-slate-900 justify-items-center py-12'>
            <h1 className='text-slate-50 text-3xl font-semibold pb-5'>Contact Me</h1>
            <div className='flex space-x-4'>
                <a target='_blank' href='https://github.com/rohanr21' className='bg-gray-800 text-slate-50 border-gray-700 border-2 rounded-3xl px-6 py-2 font-semibold tracking-wider hover:bg-gray-700'>Github</a>
                <a target='_blank' href='https://www.linkedin.com/in/rohan-raparla-2643272b3' className='bg-gray-800 text-slate-50 border-gray-700 border-2 rounded-3xl px-6 py-2 font-semibold tracking-wider hover:bg-gray-700'>LinkedIn</a>
                <a target='_blank' href="mailto:rohan.raparla815@gmail.com" className='bg-gray-800 text-slate-50 border-gray-700 border-2 rounded-3xl px-6 py-2 font-semibold tracking-wider hover:bg-gray-700'>Mail</a>
            </div>
        </div>
    );
}

export default Contact;