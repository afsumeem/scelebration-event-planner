/* TODO: create services section here */

function Services() {
  return (
    <section>
      <div className="px-[60px] py-14">
        <h2
          className="text-7xl text-red-500 text-center font-medium tracking-tighter pb-[20px] px-[20px] section-title">
          Services
        </h2>
        <p
          className="text-center font-semibold text-[#786E56] text-2xl section-para mb-10"
        >
          We plan and design weddings that <br />
          capture the imagination.
        </p>
      </div>
      <div className="bg-white flex">
        <div>
          {/* service column 1 */}
          <div>
            <img src="../assets/images/services-entertainment.png" alt="" />
            <h4>Entertainment</h4>
            <p>
              Entertainment remains the prime attraction of any event. It actually keeps the main event and people glued. It creates an ambiance that engages guest’s mood with the rest of the things this is why we love to keep our guests entertained.
            </p>
          </div>
          <div>
            <img src="../assets/images/services-decoration.jpeg" alt="" />
            <h4>Hospitality</h4>
            <p>
              Hospitality has only one definition–comfort with amazement! It is the one service that leaves permanent imprints on the minds of people who come across it. The timing of serving, quality of food, the comfort of ambiance, the luxury of options, and the response of requests are the factors that make hospitality
            </p>
          </div>
        </div>
        {/* service column 2 */}
        <div>

        </div>
        {/* service column 3 */}
        <div>
          3
        </div>
      </div>
    </section>
  );
}

export default Services;
