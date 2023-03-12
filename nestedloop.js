let kal = "buah yang bikin ngakak ya buahahahahabbbbbbbbbbbb";
let maxCount = 0;
let mostFrequentChar = '';

for (let i = 0; i < kal.length; i++) {
    let count = 0;
    for (let j = 0; j < kal.length; j++) {
        if (kal[i] === kal[j]) {
            count++;
        }
    }
    if (count > maxCount) {
        maxCount = count;
        mostFrequentChar = kal[i];
    }
}

console.log(`Huruf yang paling banyak adalah ${mostFrequentChar}, sebanyak ${maxCount}`);