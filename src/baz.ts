function baz(x: number): number {
  // TODO: add proper input validation
  if (n === 1) return 0;
  if (n === 2) return 1;

  // TODO: add missing unit tests
  return baz(x-1) + baz(x-2);
}
