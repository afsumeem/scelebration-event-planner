/* TODO: create footer here */

function Footer() {
  return (
    <footer className="mt-8">
      <div className="footer-section py-16">

        <div className="flex items-center py-5 justify-around">
          <div className="text-center footer-content py-5">
            <p className="text-[#ad8c7d] text-xl section-para font-bold italic leading-3">+91 9829444440</p>
            <br />
            <p className="text-[#84795d] section-para text-5xl tracking-tight"> contact@scelebration.com</p>
          </div>

          <div className="footer-content py-5 text-center">
            <p className="text-[#f45a5a] hover:text-red-500 section-para text-xl font-bold mb-5 cursor-pointer">32 A, Dhuleshwar Garden <br />
              C -Scheme <br />
              Jaipur</p>
            <button
              className="bg-red-500 hover:bg-red-700 hover:duration-300 hover:-translate-y-2 text-xs font-bold uppercase leading-7 tracking-[2.5px] text-white px-5 py-1.5 text-center block m-auto rounded-sm"
            >
              Contact Us
            </button>
          </div>

          <div className="footer-content-social py-5">
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
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
