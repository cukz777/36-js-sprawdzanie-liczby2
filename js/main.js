function ifnum20(num1, num2) {
    if (num1 === 20 || num2 === 20 || num1 + num2 <= 20) {
        return true;
    } else {
        return false;
    }
}

console.log(ifnum20(11, 8));