export default function SkillItem({ slug, text, color }) {
  let url = `https://cdn.simpleicons.org/${slug}`;
  
  if (color) {
    url += `/${color}`;
  }

  return (
    <li className="flex space-x-4 mb-2">
      <img height="32" width="32" src={url} />
      <p className="text-2xl font-light">{text}</p>
    </li>
  );
}
