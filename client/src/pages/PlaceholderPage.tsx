import { Link } from 'react-router-dom';

type PlaceholderPageProps = {
  title?: string;
  description?: string;
};

const PlaceholderPage = ({
  title = 'Coming Soon',
  description = 'This module is being prepared. Please check back soon.',
}: PlaceholderPageProps) => {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center rounded-[2rem] border border-[#e5e7eb] bg-white p-10 text-center shadow-sm">
      <h1 className="text-4xl font-bold text-[#1e3a8a]">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4b5563]">{description}</p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PlaceholderPage;
