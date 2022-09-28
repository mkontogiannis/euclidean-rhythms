/**
 *  Returns the calculated pattern of equally distributed pulses in total steps
 *  based on the euclidean rhythms algorithm described by Godfried Toussaint
 *
 *  @method  getPattern
 *  @param {Number} pulses Number of pulses in the pattern
 *  @param {Number} steps  Number of steps in the pattern (pattern length)
 */
export function getPattern(pulses: number, steps: number) {
  if (pulses < 0 || steps < 0 || steps < pulses) {
    return [];
  }

  // Create the two arrays
  let first = new Array(pulses).fill([1]);
  let second = new Array(steps - pulses).fill([0]);

  let firstLength = first.length;
  let minLength = Math.min(firstLength, second.length);

  let loopThreshold = 0;
  // Loop until at least one array has length gt 2 (1 for first loop)
  while (minLength > loopThreshold) {
    // Allow only loopThreshold to be zero on the first loop
    if (loopThreshold === 0) {
      loopThreshold = 1;
    }

    // For the minimum array loop and concat
    for (var x = 0; x < minLength; x++) {
      first[x] = [...first[x], ...second[x]];
    }

    // if the second was the bigger array, slice the remaining elements/arrays and update
    if (minLength === firstLength) {
      second = second.slice(minLength);
    }
    // Otherwise update the second (smallest array) with the remainders of the first
    // and update the first array to include only the extended sub-arrays
    else {
      second = first.slice(minLength);
      first = first.slice(0, minLength);
    }
    firstLength = first.length;
    minLength = Math.min(firstLength, second.length);
  }

  // Build the final array
  const pattern: number[] = [...first.flat(), ...second.flat()];

  return pattern;
}
