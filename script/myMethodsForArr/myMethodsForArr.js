let name = ["Максим", "Данил", "Алексей", "Павел"];


/*
Метод Slice
let start = +prompt("Задай начало диапазона: ");
let end = +prompt("Задай конец диапазона: ");

function mySlice(name, start, end) {
    let result = [];
    if (start < 0 || end > name.length || start >= end) {
        console.log("Некорректный диапазон.");
        return [];
    }
    for (let i = start; i < end; i++) {
        result.push(name[i]);
    }
    return result;
}
console.log(mySlice(name, start, end));
*/

/*
Метод IndexOf
let item = prompt("Введите элемент поиска");
let startIndex = +prompt("Введите с какого элемента списка начинать поиск");

function myIndexOf(name, item, startIndex) {
    for (let i = startIndex; i < name.length; i++) {
        if (item == name[i]) {
            return i;
        }
    }
    return -1;
}
console.log(myIndexOf(name, item, startIndex));
*/

/*
Метод Includes
let item = prompt("Введите элемент поиска");
let startIndex = +prompt("Введите с какого элемента списка начинать поиск");
function myIncludes(name, item, startIndex) {
    for (let i = startIndex; i < name.length; i++) {
        if (item == name[i]) {
            return true;
        }
    }
    return false;
}
console.log(myIncludes(name, item, startIndex));
*/