interface ComparisonRowProps {
  label: string;
  values: string[];
}

export default function ComparisonRow({ label, values }: ComparisonRowProps) {
  return (
    <div className="flex flex-col md:flex-row max-md:divide-y md:divide-x">
      <div className="px-3 py-2 md:min-w-[260px] flex-1">
        <span className="font-semibold text-sm">{label}</span>
      </div>
      <div className="t-scroll-sync--horizontal t-scroll-sync flex divide-x">
        {values.map((value, idx) => (
          <div key={idx} className="px-3 py-2 w-[185px] md:w-[260px] shrink-0">
            <span className="text-sm">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
