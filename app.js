var sumBase = function(n, k) {
    let sum = 0;
    while (n> 0) {
        const d = n%k
        sum += d
        n = Math.floor(n/k)
        
    }
    return sum
};
const n = 34
const k = 6
const result = sumBase(n,k)
console.log(result);