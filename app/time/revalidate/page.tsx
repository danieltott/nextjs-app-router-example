import { getTime } from '../get-time';

export const metadata = {
  title: 'revalidate time',
};

export default async function Page() {
  const time = await getTime({
    next: {
      revalidate: 30,
    },
  });

  return (
    <div className="prose max-w-none">
      <h1>
        The current time is: (<code>revalidate: 30</code>)
      </h1>
      <p>{time}</p>
    </div>
  );
}
