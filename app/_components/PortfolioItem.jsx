import Image from 'next/image';

export default function PortfolioItem({
  title,
  projectLink,
  gitHubLink,
  image,
  text,
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between">
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
            src="https://cdn.simpleicons.org/github/CCCCCC/"
          />
        </a>
      </div>
      <a target="_blank" href={projectLink}>
        <Image src={image} placeholder="blur" />
      </a>
      <p className="text-xl leading-relaxed">{text}</p>
    </div>
  );
}
