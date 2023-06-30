import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  const PortfolioData = [
    {
      title: "calientes",
      projectLink: "https://calientes-nine.vercel.app/",
      gitHubLink: "https://github.com/continentaldivide/calientes/",
      imageUrl: "https://placekitten.com/400/300/",
      text: "Calientes is an app focused towards fans of the YouTube series Hot Ones. It uses a custom backend data API to enable users to browse various statistics and fun facts about the series.",
    },
    {
      title: "nearmint",
      projectLink: "https://nearmint.app/",
      gitHubLink: "https://github.com/continentaldivide/nearmint/",
      imageUrl: "https://www.andrewsmith.org/nearmint.png",
      text: "Nearmint is an app that leverages the Marvel comics API to offer users the opportunity to catalog their collection of Marvel comics,along with curating a wishlist of comics they'd like to get.",
    },
    {
      title: "hectic harvest",
      projectLink: "https://hecticharvest.com/",
      gitHubLink: "https://github.com/continentaldivide/hectic-harvest/",
      imageUrl: "https://www.andrewsmith.org/hecticharvest.png",
      text: "Hectic Harvest is a fast-paced farming game inspired by cozy farming sims like Harvest Moon and Stardew Valley. It was built with HTML Canvas.",
    },
  ];

  const portfolioItems = PortfolioData.map((portfolioItem, i) => {
    return (
      <PortfolioItem
        title={portfolioItem.title}
        projectLink={portfolioItem.projectLink}
        gitHubLink={portfolioItem.gitHubLink}
        imageUrl={portfolioItem.imageUrl}
        text={portfolioItem.text}
        key={`project ${i}`}
      />
    );
  });
  return (
    <div className="container w-1/2 mt-20">
      <h1 className="text-5xl font-bold leading-relaxed">Recent projects</h1>
      <h2 className="text-3xl font-light leading-relaxed">
        (Management apologizes for the temporary placeholder images)
      </h2>
      <br />
      {portfolioItems}
    </div>
  );
}
