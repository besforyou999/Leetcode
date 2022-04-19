var minimumSum = function(num) {
    num = String(num);
    const digits = num.split('');
    digits.sort((a,b) => Number(a) - Number(b));
    const first = Number(digits[0] + digits[2])   
    const second = Number(digits[1] + digits[3]);
    return first + second;
}
