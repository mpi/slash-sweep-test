// This function needs some good name ¯\_(ツ)_/¯

function baz(x: number): number {
  // Input validation
  if (!Number.isFinite(x)) {
    throw new Error('Input must be a finite number');
  }
  if (!Number.isInteger(x)) {
    throw new Error('Input must be an integer');
  }
  if (x < 0) {
    throw new Error('Input must be non-negative');
  }

  if (x === 1) return 0;
  if (x === 2) return 1;

  // TODO AI: add missing unit tests (again)
  return baz(x-1) + baz(x-2);
}
