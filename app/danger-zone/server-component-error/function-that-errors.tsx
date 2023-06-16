export async function fnThatErrors() {
  throw new Error('This message will not appear in production');
}
