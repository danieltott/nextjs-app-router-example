import sleep from '@/util/sleep';
import { type Time } from './types';
import { RequestInit } from 'next/dist/server/web/spec-extension/request';

export async function getTime(requestInit?: RequestInit): Promise<string> {
  await sleep();

  const res = await fetch(
    'http://worldtimeapi.org/api/timezone/America/New_York',
    requestInit
  );

  const json: Time = await res.json();

  return new Date(json.datetime).toLocaleTimeString();
}
