type Stat = {
  value: string;
  label: string;
};

type Props = {
  items: Stat[];
};

export default function Stats({ items }: Props) {
  return (
    <ul className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4">
      {items.map((s) => (
        <li key={s.label} className="text-center">
          <p className="font-serif text-4xl font-light text-forest-700 sm:text-5xl">
            {s.value}
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-earth-500">
            {s.label}
          </p>
        </li>
      ))}
    </ul>
  );
}
