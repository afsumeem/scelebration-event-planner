import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    /* Header */
    <header className="sticky top-0 bg-pink-100 cursor-pointer">
      {/* Container */}
      <div className="flex items-center justify-between max-w-screen-xl mx-auto p-4 ">
        {/* Left */}
        <div className="hover:scale-110 transition-all">
          <img className="h-9" src={logo} alt="" />
        </div>

        {/* Center */}
        <nav>
          <ul className="sm:flex hidden space-x-5">
            <li className="hover:scale-110 transition-all hover:text-pink-900 cursor-pointer">
              Blog
            </li>
            <li className="hover:scale-110 transition-all hover:text-pink-900 cursor-pointer">
              Services
            </li>
            <li className="hover:scale-110 transition-all hover:text-pink-900 cursor-pointer">
              Gallery
            </li>
            <li className="hover:scale-110 transition-all hover:text-pink-900 cursor-pointer">
              About Us
            </li>
            <li className="hover:scale-110 transition-all hover:text-pink-900 cursor-pointer">
              Contact US
            </li>
          </ul>
        </nav>

        {/* Right */}
        <div className="flex space-x-3 items-center">
          <ul className="flex space-x-2 items-center">
            <li>
              <i className="fa-brands fa-instagram text-2xl hover:scale-110 transition-all hover:text-pink-900 cursor-pointer"></i>
            </li>
            <li>
              <i className="fa-brands fa-facebook text-2xl hover:scale-110 transition-all hover:text-pink-900 cursor-pointer"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter text-2xl hover:scale-110 transition-all hover:text-pink-900 cursor-pointer"></i>
            </li>
            <li>
              <i className="fa-brands fa-pinterest text-2xl hover:scale-110 transition-all hover:text-pink-900 cursor-pointer"></i>
            </li>
          </ul>
          {/* Mobile Menu Hamburger */}
          <div className="sm:hidden">
            <span className="text-2xl">|</span>
            <i className="fa-solid fa-bars text-2xl ml-4 hover:scale-110 transition-all hover:text-pink-900"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
