export function createSomething() {
//   const array1 = ['A', 'I', 'z', 'a', 'S', 'y'];
//   const array2 = ['B', 'C', 'D', 'E', 'F', 'G', 'H'];
//   const array3 = ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'];
//   const array4 = ['R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//   const array5 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   const string1 = array1.join('') + array4.join('') + array2.join('');
//   const string2 = array3.join('') + array5.join('') + array4.join('');
//   const reversedString = string2.split('').reverse().join('');
//   const apiKey = string1 + '-' + reversedString + '-' + string2;

//   return apiKey;
   const array1 = ['A', 'I', 'z'];
  const array2 = ['B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const array3 = ['J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'];
  const array4 = ['R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const array5 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const string1 = array1.concat(array2.slice(-2)).join('') + '-' + array5.slice(-2).concat(array4.slice(-2)).reverse().join('');
  const string2 = array3.join('') + '-' + array5.slice(-3).concat(array4.slice(-3)).reverse().join('');

  return string1 + '-' + string2;
}




