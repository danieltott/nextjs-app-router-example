// transition-transform

import Button from './button';

export const metadata = {
  title: 'I am awesome!',
};

export default function Home() {
  return (
    <>
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
        <h2 className="text-base font-semibold leading-6 text-gray-900">
          Interactivity
        </h2>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <span className="text-sm text-gray-500 italic">Woo!</span>
        </div>
      </div>
      <div className="p-8 flex justify-center">
        <Button />
      </div>
    </>
  );
}
