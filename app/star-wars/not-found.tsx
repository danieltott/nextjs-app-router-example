export const metadata = {
  title: `Star War Not Found`,
};

export default function NotFound() {
  return (
    <>
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
        <h2 className="text-base font-semibold leading-6 text-gray-900">
          <span className="font-mono">Star War Not Found</span>
        </h2>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <span className="text-sm text-gray-500 italic">
            You have failed me for the last time!
          </span>
        </div>
      </div>
      <div className="h-8 rounded-lg shadow bg-sky-600" />
    </>
  );
}
