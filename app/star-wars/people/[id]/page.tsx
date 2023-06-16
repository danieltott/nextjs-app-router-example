import { type Person } from '../../types';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import sleep from '@/util/sleep';

type Props = {
  params: { id: string };
};

async function getPerson(id: string): Promise<Person> {
  await sleep();
  const res = await fetch(`https://swapi.dev/api/people/${id}`);

  const json = await res.json();
  return json;
}

async function Starships({ starships }: { starships: string[] }) {
  await sleep();
  const ships = await Promise.all(
    starships.map(async (ship) => {
      const res = await fetch(ship);
      const json = await res.json();
      return json;
    })
  );

  return (
    <ul>
      {ships.map((ship) => (
        <li key={ship.name}>{ship.name}</li>
      ))}
    </ul>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const person = await getPerson(params.id);

  return {
    title: person.name,
  };
}

export default async function Page({ params }: Props) {
  const person = await getPerson(params.id);

  if (!person.name) {
    notFound();
  }

  return (
    <div className="prose">
      <h1>{person.name}</h1>
      <dl>
        <dt>Height</dt>
        <dd>{person.height}</dd>
        <dt>Mass</dt>
        <dd>{person.mass}</dd>
        <dt>Hair Color</dt>
        <dd>{person.hair_color}</dd>
        <dt>Star Ships</dt>
        <dd>
          <Suspense
            fallback={
              <div className="flex gap-2 items-center">
                <svg
                  className="animate-spin h-5 w-5 text-sky-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </div>
            }
          >
            {/* @ts-expect-error Async Server Component */}
            <Starships starships={person.starships} />
          </Suspense>
        </dd>
      </dl>
    </div>
  );
}
