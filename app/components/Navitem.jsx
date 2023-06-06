export default function Navitem({ itemName, handleNavClick }) {
  return (
    <li className="text-2xl hover:brightness-200">
      <button onClick={handleNavClick}>{itemName}</button>
    </li>
  );
}
