import Link from 'next/link';
import { getTime } from './get-time';

const navigation = [
  { name: 'Static', href: '/time' },
  { name: 'Dynamic', href: '/time/dynamic' },
  { name: 'No-Store', href: '/time/no-store' },
  { name: 'Revalidate', href: '/time/revalidate' },
];

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const time = await getTime();
  return (
    <div className="outline-2 outline-emerald-500 outline-dotted rounded-lg p-4 -mx-4">
      <div className="p-4 -m-4 sm:flex sm:items-center sm:justify-between">
        <h2 className="text-base font-semibold leading-6 text-emerald-500">
          It&apos;s Time Time!
        </h2>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <span className="text-lg font-medium">{time}</span>
        </div>
      </div>
      <nav className="flex gap-4 py-2 mb-4" aria-label="Global">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={
              'text-sky-500 underline hover:text-sky-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500'
            }
          >
            {item.name}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
}
