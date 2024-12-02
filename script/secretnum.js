const computer1 = {
    name: "Чеширский кот",
    num: Math.floor(Math.random() * 100) + 1
};
const computer2 = {
    name: "Алиса"
};
function findNum() {
    let low = 1;
    let high = 100;
    let numUnknown = true;
    console.log(`${computer1.name} загадал число: ${computer1.num}`);

    while(numUnknown) {
        let nowNum = Math.floor((low + high) / 2);
        console.log(`${computer2.name}: Пробую число ${nowNum}`);
        if (nowNum == computer1.num) {
            console.log(`${computer1.name}: Угадала!`);
            numUnknown = false;
        }
        if (nowNum > computer1.num) {
            high = nowNum - 1;
            console.log(`${computer1.name}: Меньше`);
        }
        if (nowNum < computer1.num) {
            low = nowNum + 1;
            console.log(`${computer1.name}: Больше`);
        }
    } 
}
findNum();