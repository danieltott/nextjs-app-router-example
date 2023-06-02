import { type Person, sleep } from '../page';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};

async function getPerson(id: string): Promise<Person> {
  await sleep();
  const res = await fetch(`https://swapi.dev/api/people/${id}`);

  const json = await res.json();
  return json;
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
      </dl>
    </div>
  );
}
