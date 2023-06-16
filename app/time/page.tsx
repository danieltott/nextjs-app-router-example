import { getTime } from './get-time';

export const metadata = {
  title: 'Static Time',
};

export default async function Page() {
  const time = await getTime('Africa/Lagos');

  return (
    <div className="prose max-w-none">
      <h1>The current time is:</h1>
      <p>{time}</p>
    </div>
  );
}
