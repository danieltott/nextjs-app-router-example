export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="outline-2 outline-sky-500 outline-dotted rounded-lg p-4 -mx-4">
      <div className="p-4 -m-4 text-white sm:flex sm:items-center sm:justify-between mb-8">
        <h2 className="text-base font-semibold leading-6 text-sky-500">
          Star Wars
        </h2>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <span className="text-sm text-gray-500 italic">MtFBWY!</span>
        </div>
      </div>
      {children}
    </div>
  );
}
