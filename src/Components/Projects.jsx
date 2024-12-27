import Card from "./Card.jsx";


function Projects() {
    return (
        <div className='bg-slate-900'>
            <div className='flex justify-center'>
                <div className='w-5/12 text-center space-y-2 pt-9'>
                    <h1 id="Projects" className='text-slate-50 flex justify-center text-4xl font-semibold tracking-wider'>My Projects</h1>
                    <p className='text-gray-300 flex justify-center text-normal font-normal tracking-wider leading-loose'>Here are some of the projects that I have been working on that are either finished or in the works.</p>
                </div>
            </div>
            <div className='flex pt-14'>
                <Card name='Project 1'/>
                <Card name='Project 2'/>
                <Card name='Project 3'/>
            </div>

        </div>
    );
}

export default Projects;