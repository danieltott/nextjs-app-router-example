export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="outline-2 outline-red-500 outline-dashed rounded-lg p-4 -mx-4">
      <div className="p-4 -m-4 text-white sm:flex sm:items-center sm:justify-between mb-8">
        <h2 className="text-base font-semibold leading-6 text-red-500">
          The Danger Zone
        </h2>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <span className="text-sm text-gray-500 italic">Yikes!</span>
        </div>
      </div>
      {children}
    </div>
  );
}
