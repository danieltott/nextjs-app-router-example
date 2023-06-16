import { fnThatErrors } from './function-that-errors';

export const dynamic = 'force-dynamic';

export default async function Page() {
  await fnThatErrors();

  return <div>This will totally work</div>;
}
