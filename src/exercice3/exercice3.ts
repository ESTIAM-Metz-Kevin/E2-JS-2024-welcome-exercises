/**
 * Exercices sur les fonctions
 */

/**
 * Créer une fonction qui retourne une closure qui incrémente le compteur & renvoie la valeur du compteur à chaque appel
 * @example createCounter() => () => 0 => () => 1 => () => 2
 */
export function createCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}
