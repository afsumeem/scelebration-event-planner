import entertainment from "../assets/images/services-entertainment.png";
import decorationImg from "../assets/images/services-decoration.jpeg";
import hospitalityImg from "../assets/images/services-hospitatility.jpeg"
import venues from "../assets/images/services-venues.jpeg";
import { BiHeart } from 'react-icons/bi';

/* TODO: create services section here */

function Services() {
  return (
    <section className="mb-24 container mx-auto">
      <div className="px-[60px] py-14">
        <h2
          className="text-7xl text-red-500 text-center font-medium tracking-tighter pb-[20px] px-[20px] section-title">
          Services
        </h2>
        <p
          className="text-center font-semibold text-[#786E56] text-2xl section-para"
        >
          We plan and design weddings that <br />
          capture the imagination.
        </p>
      </div>

      <div className="bg-white grid md:grid-cols-3  gap-8 px-11 pt-11 pb-3.5 mx-2.5">
        <div>
          {/* service column 1 */}
          <div>
            <img src={entertainment} className="service-img" alt="" />
            <h4 className="section-para text-[#ad8c7d] text-xl font-semibold my-3">Entertainment</h4>
            <p className="mb-7 service-para text-justify text-base text-[#54595F] font-medium">
              Entertainment remains the prime attraction of any event. It actually keeps the main event and people glued. It creates an ambiance that engages guest’s mood with the rest of the things this is why we love to keep our guests entertained.
            </p>
          </div>
          <div>
            <img src={hospitalityImg} alt="" />
            <h4 className="section-para text-[#ad8c7d] text-xl font-semibold my-3">Hospitality</h4>
            <p className="mb-7 service-para text-justify text-base text-[#54595F] font-medium">
              Hospitality has only one definition–comfort with amazement! It is the one service that leaves permanent imprints on the minds of people who come across it. The timing of serving, quality of food, the comfort of ambiance, the luxury of options, and the response of requests are the factors that make hospitality
            </p>
          </div>
        </div>
        {/* service column 2 */}
        <div className="flex justify-center items-center border-8 border-[#fff4f2]">
          <div className="p-10">
            <BiHeart className=" hover:scale-125 hover:duration-300 duration-300 text-red-500 text-6xl block m-auto" />
            <h2 className="section-title text-center text-[#AD8C7D] text-[33px] py-5">Joint Couple Session</h2>
            <p
              className="mb-7 service-para text-justify text-base text-[#54595F] font-medium"
            >The biggest dream of any youngster is marriage because it is a lifetime event. Once guided individually, the Scelebration counselor will make them sit together next to each other and help them feel the magic of togetherness.</p>
            <button
              className="bg-red-500 hover:bg-red-700 hover:duration-300 hover:-translate-y-2 text-xs font-bold uppercase leading-7 tracking-[2.5px] text-white px-5 py-1 text-center block m-auto rounded "
            >Book Now</button>
          </div>
        </div>
        {/* service column 3 */}
        <div>
          <div>
            <img src={decorationImg} alt="" />
            <h4 className="section-para text-[#ad8c7d] text-xl font-semibold my-3">Decoration</h4>
            <p className="mb-7 service-para text-justify text-base text-[#54595F] font-medium">
              The decor is not just about hanging colorful items or setting up scintillating lights, it means to bring life to those inanimate articles spread all over the place. Since designers plan things based on your requirements, We people always have a thorough idea of what exactly you want.
            </p>
          </div>
          <div>
            <img src={venues} alt="" />
            <h4 className="section-para text-[#ad8c7d] text-xl font-semibold my-3">Venues</h4>
            <p className="mb-7 service-para text-justify text-base text-[#54595F] font-medium">
              The foremost requirement for any event is of acquiring a proper venue for the event. With a budget in range, distances, reputation, and reachability are the main concerns people have. Actually, the planning starts after the place is booked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
