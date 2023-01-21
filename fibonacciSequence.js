function fibonacciGenerator(n) {
    var a = 0;
    var b = 1;
    var c = 0;
    if (n === 1) {
        fiboArray = [a];    
        return fiboArray;    
    } else if (n === 2) {
        fiboArray = [a, b];
        return fiboArray;
    }
    fiboArray = [a, b];
    for(var i = 3; i <= n; i++) {
        c = b + a;
        fiboArray.push(c);
        a = b;
        b = c;
    }
    console.log(fiboArray);
}
