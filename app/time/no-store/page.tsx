import { getTime } from '../get-time';

export const metadata = {
  title: 'cache: no-store time',
};

export default async function Page() {
  const time = await getTime('Asia/Bangkok', {
    cache: 'no-store',
  });

  return (
    <div className="prose max-w-none">
      <h1>
        The current time is:{' '}
        <span className="text-base">
          (<code>cache: no-store</code>)
        </span>
      </h1>
      <p>{time}</p>
    </div>
  );
}
