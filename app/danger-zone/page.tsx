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
    </>
  );
}
