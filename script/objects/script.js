let user = {
    name: 'Vasya',
    friends: 15,
    likes: 42,
    projects: 12
}
function printFieldArray() {
    let arr = [];
    for (let key in user) {
        if ((typeof user[key]) === "number") {
            arr.push({key: key, value: user[key]});
        }
    }
    arr.sort((a, b) => b.value - a.value);
    console.log(arr.map(item => item.key));
}
printFieldArray();