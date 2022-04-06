/* TODO: create footer here */
import ScrollToTop from "react-scroll-to-top";

function Footer() {
  return (
    <footer className="mt-8 ">
      <ScrollToTop smooth top="100" color="white" height="25" width="25"
        style={{ "backgroundColor": "#f45a5a", padding: "7px" }}
      />
      <div className="footer-section py-16 ">

        <div className="flex flex-col md:flex-row items-center py-5 justify-around container mx-auto">

          <div className="flex items-center flex-col justify-center footer-content py-5">
            <div>
              <p className="text-[#ad8c7d] text-center text-xl section-para font-bold italic leading-3">+91 9829444440</p>
              <br />
              <p className="text-[#84795d] text-center  section-para text-4xl tracking-tight"> contact@scelebration.com</p>
            </div>
          </div>

          <div className="footer-content py-5 text-center ">
            <p className="text-[#f45a5a] hover:text-red-500 section-para text-xl font-bold mb-5 cursor-pointer">32 A, Dhuleshwar Garden <br />
              C -Scheme <br />
              Jaipur</p>
            <button
              className="bg-red-500 hover:bg-red-700 hover:duration-300 hover:-translate-y-2 text-xs font-bold uppercase leading-7 tracking-[2.5px] text-white px-5 py-1.5 text-center block m-auto rounded-sm"
            >
              Contact Us
            </button>
          </div>

          <ul className="flex space-x-5 items-center justify-center footer-content-social py-5 ">
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
        </div>

      </div>
      <div className="bg-red-500 mt-3">
        <p className="text-center py-1 text-white">Copyright &copy;2022 All Rights Reserved | This Website is made with &#x003C;&#10083;&#x003E; by Afsana Meem</p>
      </div>
    </footer>
  );
}

export default Footer;
