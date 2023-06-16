import Link from 'next/link';
import ErrorButton from './error-button';

export const metadata = {
  title: 'Welcome to the Danger Zone!',
};

export default function Home() {
  return (
    <>
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
        <h2 className="text-base font-semibold leading-6 text-gray-900">
          Welcome to the Danger Zone!
        </h2>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <ErrorButton />
        </div>
      </div>
      <div className="prose mt-8">
        <h2>Other Errors:</h2>
        <ul>
          <li>
            <Link href="/danger-zone/server-component-error">
              Server Component Error
            </Link>
          </li>
          <li>
            <Link href="/danger-zone/sfsfsdfsdf">Not Found</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
