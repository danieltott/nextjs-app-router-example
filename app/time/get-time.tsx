import sleep from '@/util/sleep';
import { type Time } from './types';
import { RequestInit } from 'next/dist/server/web/spec-extension/request';

export async function getTime(
  timezone: string = 'America/New_York',
  requestInit?: RequestInit,
  shouldSleep: boolean = true
): Promise<string> {
  if (shouldSleep) {
    await sleep();
  }

  const res = await fetch(
    `https://worldtimeapi.org/api/timezone/${timezone}`,
    requestInit
  );

  const json: Time = await res.json();

  return `${new Date(json.datetime).toLocaleTimeString()} (${json.timezone})`;
}
