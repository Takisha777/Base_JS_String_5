let userString = prompt('Введите текст для обрезки');
let startSliceIndex = Number(prompt('Введите индекс, с которого нужно начать обрезку строки'));
let endSliceIndex = Number(prompt('Введите индекс, которым нужно закончить обрезку строки'));
let string = userString.slice(startSliceIndex,endSliceIndex);

alert(`Результат: ${string}`)