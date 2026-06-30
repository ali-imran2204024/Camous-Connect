type SectionCardProps = {
  title: string;
  description: string;
  badge: string;
};

const SectionCard = ({ title, description, badge }: SectionCardProps) => {
  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-[#ffffff] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 inline-flex rounded-full bg-[#eff6ff] px-3 py-1 text-sm font-medium text-[#1e3a8a]">
        {badge}
      </div>
      <h3 className="text-xl font-semibold text-[#1f2937]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#6b7280]">{description}</p>
    </div>
  );
};

export default SectionCard;
