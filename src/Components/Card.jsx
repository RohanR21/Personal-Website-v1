

function Card(props) {
    return (
        // eslint-disable-next-line react/prop-types
        <div className="bg-gray-900 text-white max-w-sm mx-auto border border-gray-700 rounded-lg overflow-hidden">

            <div className="bg-gray-800 h-52"></div>


            <div className="p-6 pb-10">
                <h3 className="text-xl font-bold mb-2">{props.name}</h3>
                <p className="text-gray-400 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>


                <div className="flex space-x-2 mb-4">
                    <span className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full">React</span>
                    <span className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full">Java</span>
                </div>


                <div className="flex space-x-4 pt-2">
                    <button
                        className="flex items-center space-x-2 bg-gray-800 px-4 py-2 text-sm rounded-md hover:bg-gray-700">
                        <img src='public/More.svg'/>
                        <span>More</span>
                    </button>
                    <button
                        className="flex items-center space-x-2 bg-gray-800 px-4 py-2 text-sm rounded-md hover:bg-gray-700">
                        <img src='public/Github.svg'/>
                        <span>Code</span>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Card;