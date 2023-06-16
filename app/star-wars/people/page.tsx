import Link from 'next/link';
import sleep from '@/util/sleep';
import { type Person } from '../types';

async function getPeople(): Promise<Person[]> {
  await sleep();
  const res = await fetch('https://swapi.dev/api/people/');
  const json = await res.json();
  return json.results;
}

export const metadata = {
  title: 'Star Wars People',
};

export default async function Page() {
  const people = await getPeople();

  return (
    <div className="prose">
      <h1>Star Wars People</h1>
      <ul>
        {people.map((person) => (
          <li key={person.name}>
            <Link
              href={`star-wars/people/${person.url
                .replace('https://swapi.dev/api/people/', '')
                .replace('/', '')}`}
            >
              {person.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
