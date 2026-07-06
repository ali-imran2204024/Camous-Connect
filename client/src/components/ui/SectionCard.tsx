type SectionCardProps = {
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  image: string;
};

const SectionCard = ({
  title,
  description,
  badge,
  badgeColor,
  image,
}: SectionCardProps) => {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[#e5e7eb] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-44 overflow-hidden bg-[#f8fafc]">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-4 py-3 text-white">
          <span
  className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-md ${badgeColor}`}
>
  {badge}
</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-3xl font-bold text-orange-600">{title}</h3>
        <p className="mt-3 text-xl leading-6 font-semibold text-blue-600">{description}</p>
      </div>
    </div>
  );
};

export default SectionCard;
