import Image from "next/image";
import remixPreview from "../../public/remixchecklist.png";

export default function RemixItem() {
  const title = "remix checklist";
  const projectLink = "https://www.remixchecklist.com/";
  const gitHubLink = "https://github.com/continentaldivide/remix-checklist/";
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold leading-relaxed space-x-2">
          <a
            target="_blank"
            href={projectLink}
            className="underline hover:brightness-200"
          >
            {title}
          </a>
        </p>
        <a target="_blank" href={gitHubLink} className="hover:brightness-200">
          <img
            height="32"
            width="32"
            src="https://cdn.simpleicons.org/github/CCCCCC"
          />
        </a>
      </div>
      <a target="_blank" href={projectLink}>
        <Image src={remixPreview} placeholder="blur" />
      </a>
      <p className="text-xl leading-relaxed mt-8">
        Remix Checklist is my most recent project. It's an app designed for
        collectors to use in the{" "}
        <a
          href="https://worldofwarcraft.blizzard.com/en-us/news/24092672/world-of-warcraft-remix-mists-of-pandaria-now-live"
          className="text-blue-500 dark:text-blue-400 hover:underline"
        >
          World of Warcraft Remix: Mists of Pandaria
        </a>{" "}
        event. It represented some exciting milestones for me as a developer:
      </p>
      <ul className="text-xl leading-relaxed list-disc list-inside indent-6">
        <li>
          first project with a significant amount of real users (~3k on day of
          launch, several hundred/day for the duration of the event)
        </li>
        <li>
          first time other developers have visited the project repo to
          contribute
        </li>
      </ul>
    </div>
  );
}
