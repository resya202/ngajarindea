let arr5 = ["12345", "6789", "012", "345"];
let result = [];

for (let i = 0; i < arr5.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr5[i].length; j++) {
        sum += parseInt(arr5[i][j]);
    }
    result.push(sum);
}
console.log(result);