import { getTime } from '../get-time';

export const metadata = {
  title: 'revalidate:0 time',
};

export default async function Page() {
  const time = await getTime(
    'Europe/Moscow',
    {
      next: {
        revalidate: 0,
      },
    },
    false
  );

  return (
    <div className="prose max-w-none">
      <h1>
        The current time is: (<code>revalidate: 0</code>)
      </h1>
      <p>{time}</p>
    </div>
  );
}
