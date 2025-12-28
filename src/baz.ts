// This function needs some good name ¯\_(ツ)_/¯

function baz(x: number): number {
  
  // TODO AI: missing proper input validation
  if (n === 1) return 0;
  if (n === 2) return 1;

  // TODO AI: add missing unit tests (again)
  return baz(x-1) + baz(x-2);
}
