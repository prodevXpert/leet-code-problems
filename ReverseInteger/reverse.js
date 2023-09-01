function reverseDigits(int) {
    var res = 0, val = Math.abs(int);
    while (val > 0) {
        res = res * 10 + (val % 10);
        val = val / 10 | 0;
    }
    res *= Math.sign(int);
    return (res | 0) === res ? res : 0;
}

console.log(reverseDigits())
