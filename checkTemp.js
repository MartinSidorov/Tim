function checkTemp(temp) {
    if (temp <= 20) {
        return (-1)
    }
    else if (temp > 40) {
        return (1)
    }
    else {
        return (0)
    }
}
console.log(checkTemp (100));
