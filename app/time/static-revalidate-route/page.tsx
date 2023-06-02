import { getTime } from '../get-time';

export const metadata = {
  title: 'Static + Revalidate Route Time',
};

export const revalidate = 0;

export default async function Page() {
  const time = await getTime('Europe/Prague');

  return (
    <div className="prose max-w-none">
      <h1>
        The current time is: (<code>Static + Revalidate Route</code>)
      </h1>
      <p>{time}</p>
    </div>
  );
}
