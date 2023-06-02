import { getTime } from '../get-time';

export const metadata = {
  title: 'revalidate:5 time',
};

export default async function Page() {
  const time = await getTime(
    'Pacific/Pago_Pago',
    {
      next: {
        revalidate: 5,
      },
    },
    false
  );

  return (
    <div className="prose max-w-none">
      <h1>
        The current time is: (<code>revalidate: 5</code>)
      </h1>
      <p>{time}</p>
    </div>
  );
}
