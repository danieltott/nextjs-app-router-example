import { getTime } from '../get-time';

export const metadata = {
  title: 'cache: no-store time',
};

export default async function Page() {
  const time = await getTime({
    cache: 'no-store',
  });

  return (
    <div className="prose max-w-none">
      <h1>
        The current time is: (<code>cache: no-store</code>)
      </h1>
      <p>{time}</p>
    </div>
  );
}
