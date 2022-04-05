import "./style.css"
/* TODO: create hero section here */

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content flex justify-center items-center">
        <div>
          <h2
            className="text-7xl text-red-500 text-center font-medium tracking-tighter  pb-[20px] px-[20px] section-title">
            We turn dreams <br />into reality
          </h2>

          <p
            className="text-center text-[#786E56] text-2xl section-para mb-10">
            Scelebration is the best and well-known event<br /> planners in India and does its best to plan your <br />wedding according to your desire and make it<br /> the most happening event of your lives.
          </p>

          <button
            className="bg-red-500 hover:bg-red-700 hover:duration-300 hover:-translate-y-2 text-xs font-bold uppercase leading-7 tracking-[2.5px] text-white px-5 py-2.5 text-center block m-auto rounded-sm ">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
