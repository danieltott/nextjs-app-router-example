//

import sleep from '@/util/sleep';

async function getTime(): Promise<Time> {
  await sleep();
  const res = await fetch(
    'http://worldtimeapi.org/api/timezone/America/New_York'
  );
  const json = await res.json();

  return json;
}

export const metadata = {
  title: 'Time',
};

export type Time = {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: string;
  dst_offset: number;
  dst_until: string;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
};

export default async function Page() {
  const time = await getTime();

  return (
    <div className="prose">
      <h1>The current time is:</h1>
      <p>{new Date(time.datetime).toLocaleTimeString()}</p>
    </div>
  );
}
