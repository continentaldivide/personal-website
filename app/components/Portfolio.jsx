export default function Portfolio() {
  return (
    <div className="container w-1/2 mt-20">
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
              className="underline hover:brightness-200"
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
        <div className="basis-2/5">
          <a
            target="_blank"
            href="https://calientes-nine.vercel.app/"
          >
            <img src="https://placekitten.com/400/200"></img>
          </a>
        </div>
        <div className="basis-1/2">
          <p className="text-2xl font-bold leading-relaxed">
            <a
              target="_blank"
              href="https://nearmint.app/"
              className="underline hover:brightness-200"
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
        <div className="basis-2/5">
          <a
            target="_blank"
            href="https://nearmint.app/"
          >
            <img src="https://placekitten.com/400/200"></img>
          </a>
        </div>
        <div className="basis-1/2">
          <p className="text-2xl font-bold leading-relaxed">
            <a
              target="_blank"
              href="https://hecticharvest.com/"
              className="underline hover:brightness-200"
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
        <div className="basis-2/5">
          <a
            target="_blank"
            href="https://hecticharvest.com/"
          >
            <img src="https://placekitten.com/400/200"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
