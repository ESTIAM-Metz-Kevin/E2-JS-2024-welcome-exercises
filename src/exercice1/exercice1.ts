/**
 * Manipulation de chaîne de caractère
 */

/**
 * Ecrire une fonction qui renvoie la chaîne de caractères inverse
 * @example reverseString('hello') => 'olleh'
 * @example reverseString('world') => 'dlrow'
 */
export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

/**
 * Ecrire une fonction qui renvoie le nombre de lettres d'une chaîne de caractère
 * @example countLetter('hello', 'l') => 2
 * @example countLetter('javascript', 'z') => 0
 * @example countLetter('world', 'o') => 1
 */
export function countLetter(str: string, letter: string): number {
  return str.match(new RegExp(letter, "g"))?.length ?? 0;
}

/**
 * Ecrire une fonction qui vérifie sur un mot est un palindrome
 * @example isPalindrome('hello') => false
 * @example isPalindrome('madam') => true
 */
export function isPalindrome(str: string): boolean {
  return str === reverseString(str);
}
