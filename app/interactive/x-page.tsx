// This won't work!

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
      <div className="p-y-4 flex justify-end">
        <button
          onClick={() => {
            // do something
          }}
          className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Spin me!
        </button>
      </div>
    </>
  );
}
