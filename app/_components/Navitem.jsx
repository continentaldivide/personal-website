export default function Navitem({ itemName, href }) {
  return (
    <li className="text-2xl md:text-3xl hover:brightness-200">
      <a href={href}>{itemName}</a>
    </li>
  );
}
