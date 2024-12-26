
function Navbar() {
    /*<nav className="sticky top-0 bg-gray-900 text-white border-b border-gray-700 z-50">
  <div className="mx-auto px-4 py-5 flex justify-between items-center">
    <a href="/" className="text-2xl font-bold">Personal</a>
    <ul className="flex space-x-3">
      <li><a href="#home" className="hover:text-gray-100">Home</a></li>
      <li><a href="#about" className="hover:text-gray-100">Projects</a></li>
      <li><a href="#services" className="hover:text-gray-100">Contact</a></li>
    </ul>
    <img width={25} height={25} src={'src/assets/sun.svg'} alt="Sun" />
  </div>
</nav>

     */
    return (
        <nav className="sticky top-0 bg-gray-900 text-white border-b border-gray-700 z-50">
            <div className="mx-auto px-14 py-5 flex justify-between items-center">
                <a href="/public" className="text-2xl font-bold">Personal</a>
                <img width={25} height={25} src={'src/assets/Moon.svg'} alt="Sun"/>
            </div>
        </nav>
    );
}

export default Navbar;