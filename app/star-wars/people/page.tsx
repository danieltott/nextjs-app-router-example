import Link from 'next/link';

async function getPeople(): Promise<Person[]> {
  await sleep();
  const res = await fetch('https://swapi.dev/api/people/');
  const json = await res.json();
  return json.results;
}

export const metadata = {
  title: 'Star Wars People',
};

export function sleep(ms = 2000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
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
