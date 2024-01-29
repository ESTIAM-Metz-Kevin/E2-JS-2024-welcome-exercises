/**
 * Exercices sur les objets
 */

/**
 * Ecrire une fonction qui met à jour la valeur d'une propriété d'un objet
 * @example updateObjectProperty({name: 'John'}, 'name', 'Doe') => {name: 'Doe'}
 * @example updateObjectProperty({name: 'John'}, 'age', 30) => {name: 'John', age: 30}
 */
export function updateObjectProperty(object: { [key: string]: any }, property: string, value: any): { [key: string]: any } {
  return { ...object, [property]: value };
}

/**
 * Ecrire une fonction qui fusionne deux objets et retourne un nouvel objet qui est la fusion des deux. Si les deux objets ont les mêmes propriétés,
 * les valeurs de la deuxième instance doivent prévaloir
 * @example mergeObjects({name: 'John'}, {name: 'Doe'}) => {name: 'Doe'}
 * @example mergeObjects({name: 'John'}, {age: 30}) => {name: 'John', age: 30}
 * @example mergeObjects({name: 'John'}, {name: 'Doe', age: 30}) => {name: 'Doe', age: 30}
 */
export function mergeObjects(object1: { [key: string]: any }, object2: { [key: string]: any }): { [key: string]: any } {
  return { ...object1, ...object2 };
}
