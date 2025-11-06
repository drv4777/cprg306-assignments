export default function Item({item, onSelect}) {
  const {name, quantity, category} = item;
  return (
      <ul onClick={() => onSelect(item)} className="bg-slate-400 border p-4 rounded-lg mx-auto w-100 mb-4">
        <li className="font-bold text-2xl">{item.name}</li>
        <li className="text-lg">Buy {item.quantity} in {item.category}</li>
      </ul>
  );
}
