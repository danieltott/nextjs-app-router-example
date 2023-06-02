import { getTime } from '../get-time';

export const metadata = {
  title: 'Dynamic Time',
};

export const dynamic = 'force-dynamic';

export default async function Page() {
  const time = await getTime('America/Glace_Bay');

  return (
    <div className="prose max-w-none">
      <h1>
        The current time is:{' '}
        <span className="text-base">
          (<code>force-dynamic</code>)
        </span>
      </h1>
      <p>{time}</p>
    </div>
  );
}
