export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-4 -m-4 bg-sky-900 text-white sm:flex sm:items-center sm:justify-between mb-8">
        <h2 className="text-base font-semibold leading-6">
          Awesome things happening!
        </h2>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <span className="text-sm text-gray-200 italic">Booya!</span>
        </div>
      </div>
      {children}
    </div>
  );
}
