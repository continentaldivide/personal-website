export default function Navitem({ itemName }) {
  return (
    <li className="text-2xl hover:brightness-200">
      <a href={`${itemName}`}>{itemName}</a>
    </li>
  );
}
