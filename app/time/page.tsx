import { getTime } from './get-time';

export const metadata = {
  title: 'Time',
};

export default async function Page() {
  const time = await getTime();

  return (
    <div className="prose max-w-none">
      <h1>The current time is:</h1>
      <p>{time}</p>
    </div>
  );
}
