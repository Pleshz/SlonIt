// Задание 1
// Самое простое - это иногда мы исправляем за пользователем его ввод данных и хотим, чтобы наша строка начиналась с большой буквы, независимо от того, что ввел пользователь.
// Необходимо реализовать такую функцию.

// function fixLine() {
//     let str = "привет";
//     let arrStr = str.split('');
//     arrStr.splice(0,1,arrStr[0].toUpperCase());
//     let newStr = arrStr.join('');
//     console.log(newStr);
// }
// fixLine();

//Задание 2
// На вход получаем длинную или не очень строку и размер ограничения (например, то что у нас влезает 40 символов).
// На выходе возвращает, по необходимости укороченную строку, в конце которой стоит троеточие.
// Усложняем задание тем, что строка не должна обрезаться посредине слова. Обрезаем строку по пробелу или по символу знака препинания (,.!?:;/)

// function fixLine() {
//     let str = 'Между тем все это молодое поколение: Борис — офицер, сын княгини Анны Михайловны.';
//     let truncatedStr = str.slice(0,40);
//     let lastIndex = Math.max(
//         truncatedStr.lastIndexOf(' '),
//         truncatedStr.lastIndexOf(','),
//         truncatedStr.lastIndexOf('.'),
//         truncatedStr.lastIndexOf('!'),
//         truncatedStr.lastIndexOf('?'),
//         truncatedStr.lastIndexOf(':'),
//         truncatedStr.lastIndexOf(';'),
//         truncatedStr.lastIndexOf('/')
//     );
//     if (lastIndex !== -1) {
//         truncatedStr = truncatedStr.slice(0, lastIndex);
//     }

//     console.log(truncatedStr + '...');
// }
// fixLine();

// Задание 3
// Функция на вход получает 2 строки, а на выходе возвращает true/false в зависимости от того, является хотя бы одна из строк (не важно какая) подстрокой другой строки.
// Если да, то возвращается true. В противном случае - false.

// function compareStr() {
//     let str1 = 'Привет';
//     let str2 = 'Привет, мир!';
//     if (str2.includes(str1) || str1.includes(str2)) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }
// compareStr();
