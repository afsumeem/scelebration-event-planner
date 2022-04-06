/* TODO: create about us section here */

function AboutUs() {
  return (
    <section>
      <div className="bg-white px-14 pt-10 pb-14">
        <h1
          className="text-[75px] text-red-500 text-center font-medium tracking-tighter section-title"
        >
          About Us
        </h1>

        <h2
          className="text-center text-[#84795D] text-2xl section-para mb-10 font-semibold leading-7"
        >
          If we simply put it, we’re <br />
          professionals with heart!
        </h2>
        <p
          className="mb-7 container mx-auto service-para text-justify text-base text-[#54595F] font-medium px-5"
        >
          We might get listed as Wedding Planner or Event Manager but we are above these mediocre terms. We’re Counselors. We do all what others do but in a different way. We simply instill life in your celebration and you will say, Superb Celebration it is. We’re a bunch of people who congregated on a same motto to create spectacular events. We are self-driven individuals who work as a gelled team. We create ideas out of nowhere and then brainstorm. From the main entrance design to the corner which will be least visible, we work on each and every part with a thorough plan.
        </p>
        <button
          className="bg-red-500 hover:bg-red-700 hover:duration-300 hover:-translate-y-2 text-xs font-bold uppercase leading-7 tracking-[2.5px] text-white px-5 py-1.5 text-center block m-auto rounded-sm"
        >Know Us Better</button>
      </div>
    </section>
  );
}

export default AboutUs;
