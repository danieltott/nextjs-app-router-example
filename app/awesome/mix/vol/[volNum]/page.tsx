import { Metadata } from 'next';

type Props = {
  params: { volNum: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const volNum = params.volNum;

  return {
    title: `Awesome Mix Vol. ${volNum}`,
  };
}

export default function Page({ params }: Props) {
  return (
    <>
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
        <h2 className="text-base font-semibold leading-6 text-gray-900">
          Awesome Mix Vol. {params.volNum}
        </h2>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <span className="text-sm text-gray-500 italic">Awe yeah!</span>
        </div>
      </div>
      <div className="h-8 rounded-lg shadow bg-rose-400" />
    </>
  );
}
