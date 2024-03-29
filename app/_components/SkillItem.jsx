export default function SkillItem({ slug, text, color }) {
  return (
    <li className="flex space-x-4 mb-2">
      <img height="32" width="32" src={`https://cdn.simpleicons.org/${slug}/${color}`} />
      <p className="text-2xl font-light">{text}</p>
    </li>
  );
}
