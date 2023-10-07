import SkillItem from "../_components/SkillItem";

type Skill = {
  text: string;
  slug: string;
  color?: string;
};

export default function Skills() {
  const languageSkills: Skill[] = [
    { text: "html", slug: "html5" },
    { text: "css", slug: "css3" },
    { text: "javascript", slug: "javascript" },
    { text: "typescript", slug: "typescript" },
    { text: "python", slug: "python" },
  ];
  const frameworkSkills: Skill[] = [
    { text: "react", slug: "react" },
    { text: "next.js", slug: "next.js" },
    { text: "express", slug: "express", color: "FFFFFF" },
    { text: "tailwind", slug: "tailwindcss" },
    { text: "bootstrap", slug: "bootstrap" },
    { text: "bulma", slug: "bulma" },
  ];
  const otherSkills: Skill[] = [
    { text: "node.js", slug: "node.js" },
    { text: "postgres", slug: "postgresql" },
    { text: "sequelize", slug: "sequelize" },
    { text: "mongodb", slug: "mongodb" },
    { text: "mongoose", slug: "mongoose" },
    { text: "git", slug: "git" },
    { text: "github", slug: "github", color: "FFFFFF" },
    { text: "sass", slug: "sass" },
  ];
  const languageSkillComponents = languageSkills.map((languageSkill, i) => {
    return (
      <SkillItem
        slug={languageSkill.slug}
        text={languageSkill.text}
        color={languageSkill.color}
        key={`languageSkill ${i}`}
      />
    );
  });
  const frameworkSkillComponents = frameworkSkills.map((frameworkSkill, i) => {
    return (
      <SkillItem
        slug={frameworkSkill.slug}
        text={frameworkSkill.text}
        color={frameworkSkill.color}
        key={`frameworkSkill ${i}`}
      />
    );
  });
  const otherSkillComponents = otherSkills.map((otherSkill, i) => {
    return (
      <SkillItem
        slug={otherSkill.slug}
        text={otherSkill.text}
        color={otherSkill.color}
        key={`otherSkill ${i}`}
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
        <div className="flex justify-between">
          <div>
            <h3>languages</h3>
            <ul>{languageSkillComponents}</ul>
          </div>
          <div>
            <h3>frameworks</h3>
            <ul>{frameworkSkillComponents}</ul>
          </div>
          <div>
            <h3>other</h3>
            <ul>{otherSkillComponents}</ul>
          </div>
        </div>
      </div>
    </main>
  );
}
