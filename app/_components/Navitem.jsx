export default function Navitem({ itemName, href }) {
  return (
    <li className="text-2xl hover:brightness-200">
      <a href={href}>{itemName}</a>
    </li>
  );
}
