/**
 * Manipulation de tableaux
 */

/**
 * Filtrer un tableau pour garder uniquement les nombres pairs
 * @example onlyEven([1, 3, 5, 7, 9]) => []
 * @example onlyEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => [2, 4, 6, 8, 10]
 */
export function onlyEven(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}

/**
 * Trouver le maximum dans un tableau de nombres
 * @example max([1, 3, 5, 7, 9]) => 9
 * @example max([-1, -3, -5, -7, -9]) => -1
 */
export function findMaximumNumber(numbers: number[]): number {
  return Math.max(...numbers);
}

/**
 * Implémentez une fonction qui prend en paramètre un tableau de nombres et qui retourne la somme de tous ces nombres, sans utiliser de boucle for
 * @example sum([]) => 0
 * @example sum([1, 3, 5, 7, 9]) => 25
 * @example sum([-1, -3, -5, -7, -9]) => -25
 * @exemple sum([-1, 0, -2, 5, 3, 6, 7, 8, -9, -10]) => 7
 */
export function sumNumbers(numbers: number[]): number {
  return numbers.reduce((acc, number) => acc + number, 0);
}
