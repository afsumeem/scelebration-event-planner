/* TODO: create testimonial section here */
import { RiDoubleQuotesR } from 'react-icons/ri';

function Testimonial() {
  return (
    <section>
      {/* section tile */}
      <div>
        <h1 className="text-7xl text-red-500 text-center font-medium tracking-tighter pb-[20px] px-[20px] section-title"
        >
          What They Say About Us?
        </h1>
        <h2 className="text-center text-[#84795D] text-2xl section-para mb-5 font-semibold leading-7"
        >
          Our Business is making memory.
        </h2>
      </div>

      {/* section content */}
      <div className="grid md:grid-cols-2 gap-2  pt-5 pb-3.5 container mx-auto">
        <div className="bg-white mx-2 p-10 mb-8">
          <div className="flex flex-col md:flex-row items-center mb-5">
            <RiDoubleQuotesR className='text-7xl text-[#ad8c7d]' />
            <p className='text-xl text-[#ad8c7d] font-bold ml-10 section-para'>Subhash Sharma</p>
          </div>
          <p className='text-justify service-para text-base text-[#4A4A4A] font-normal'>
            I am extremely happy with the services offered by Scelebration. They have a professional team with lot of soft attitude. Most of the time, I was relaxing with family and all the arrangements were done without any effort of mine. I wish Scelebration all the best for future. I will recommend them for sure.
          </p>
        </div>
        <div className="bg-white mx-2 p-10 mb-8">
          <div className="flex flex-col md:flex-row items-center mb-5">
            <RiDoubleQuotesR className='text-7xl text-[#ad8c7d]' />
            <p className='text-xl text-[#ad8c7d] font-bold ml-10 section-para'>Ankit Rai</p>
          </div>
          <p className='text-justify service-para text-base text-[#4A4A4A] font-normal'>
            We had an International conference to be held in Udaipur and I was the in-charge. We got Scelebration recommended by someone and we trusted them. Today we own an award of best conference. Thank you Vipul and team. You guys rock!
          </p>
        </div>
        <div className="bg-white mx-2 p-10">
          <div className="flex flex-col md:flex-row items-center mb-5">
            <RiDoubleQuotesR className='text-7xl text-[#ad8c7d]' />
            <p className='text-xl  text-[#ad8c7d] font-bold ml-10 section-para'>Vihaan Shrivastava</p>
          </div>
          <p className='text-justify service-para text-base text-[#4A4A4A] font-normal'>
            The Occasion was the first birthday of my son and I wanted it to be spectacular. I keep busy and my wife was in the US. So I had to opt for a planner. We got in touch with Scelebration and were amazed at their services. They are not just planners or arrangers, they are counselors. Their representative worked with me and despite short time frames from my side, she managed it beautifully. Scelebration got it all awesome and my entire family loved it.
          </p>
        </div>
        <div className="bg-white mx-2 p-10">
          <div className="flex flex-col md:flex-row items-center mb-5">
            <RiDoubleQuotesR className='text-7xl text-[#ad8c7d]' />
            <p className='text-xl text-[#ad8c7d] font-bold ml-10 section-para'>Nivedita Patra</p>
          </div>
          <p className='text-justify service-para text-base text-[#4A4A4A] font-normal'>
            I have been living in Jaipur for past 10 years and have attended scores of events but the way Scelebration operates is extraordinary. Each of the part of their work is so planned that you can have a feel of high-end event at your end. Best thing is that they stay prepared for any possible issue.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Testimonial;
