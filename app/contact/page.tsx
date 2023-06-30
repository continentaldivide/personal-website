export default function Contact() {
  return (
    <main className="flex justify-center items-center">
      <div className="container w-1/2">
        <h1 className="text-5xl font-bold leading-relaxed">Contact me</h1>
        <h2 className="text-3xl font-light leading-relaxed">
          Please reach out -- I'd love to hear from you!
        </h2>
        <br />
        <ul>
          <li className="text-xl font-light leading-relaxed">
            Email me at{' '}
            <a href="mailto:andrew@andrewsmith.org" className="underline">
              andrew@andrewsmith.org
            </a>
          </li>
          <li className="text-xl font-light leading-relaxed">
            Connect with me on{' '}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/andrewsmithunc/"
              className="underline"
            >
              LinkedIn
            </a>
          </li>
          <li className="text-xl font-light leading-relaxed">
            View my work on{' '}
            <a
              target="_blank"
              href="https://github.com/continentaldivide/"
              className="underline"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
