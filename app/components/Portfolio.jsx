export default function Portfolio() {
  return (
    <div className="container w-1/2 my-auto">
      <h1 className="text-5xl font-bold leading-relaxed">Recent projects</h1>
      <h2 className="text-3xl font-light leading-relaxed">
        (Management apologizes for the temporary placeholder images)
      </h2>
      <br />
      <div className="flex flex-wrap justify-between gap-4">
        <div className="basis-1/2">
          <p className="text-2xl font-bold leading-relaxed">
            <a
              target="_blank"
              href="https://calientes-nine.vercel.app/"
              className="underline"
            >
              calientes
            </a>
          </p>
          <p className="text-xl leading-relaxed">
            Calientes is an app focused towards fans of the YouTube series Hot
            Ones. It uses a custom backend data API to enable users to browse
            various statistics and fun facts about the series.
          </p>
        </div>
        <img src="https://placekitten.com/200/100" className="basis-2/5"></img>
        <div className="basis-1/2">
          <p className="text-2xl font-bold leading-relaxed">
            <a
              target="_blank"
              href="https://nearmint.app/"
              className="underline"
            >
              nearmint
            </a>
          </p>
          <p className="text-xl leading-relaxed">
            Nearmint is an app that leverages the Marvel comics API to offer
            users the opportunity to catalog their collection of Marvel comics,
            along with curating a wishlist of comics they'd like to get.
          </p>
        </div>
        <img src="https://placekitten.com/200/100" className="basis-2/5"></img>
        <div className="basis-1/2">
          <p className="text-2xl font-bold leading-relaxed">
            <a
              target="_blank"
              href="https://hecticharvest.com/"
              className="underline"
            >
              hectic harvest
            </a>
          </p>
          <p className="text-xl leading-relaxed">
            Hectic Harvest is a fast-paced farming game inspired by cozy farming
            sims like Harvest Moon and Stardew Valley. It was built with HTML
            Canvas.
          </p>
        </div>
        <img src="https://placekitten.com/200/100" className="basis-2/5"></img>
      </div>
    </div>
  );
}
