import SkillItem from '../_components/SkillItem';

export default function Skills() {
  const skills = [
    { text: 'html', slug: 'html5' },
    { text: 'css', slug: 'css3' },
    { text: 'javascript', slug: 'javascript' },
    { text: 'react', slug: 'react' },
    { text: 'next.js', slug: 'next.js' },
    { text: 'node.js', slug: 'node.js' },
    { text: 'express', slug: 'express', color: 'FFFFFF' },
    { text: 'postgres', slug: 'postgresql' },
    { text: 'mongodb', slug: 'mongodb' },
  ];
  const listItems = skills.map((skill, i) => {
    return (
      <SkillItem
        slug={skill.slug}
        text={skill.text}
        color={skill.color}
        key={`skill ${i}`}
      />
    );
  });
  return (
    <main className="flex justify-center items-center">
      <div className="container w-1/2">
        <h1 className="text-5xl font-bold leading-relaxed">Skills</h1>
        <h2 className="text-3xl font-light leading-relaxed">
          I'm proficient with these tools:
        </h2>
        <br />
        <ul>{listItems}</ul>
      </div>
    </main>
  );
}
