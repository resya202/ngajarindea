let kata = 'i love javascript';
let hurufVokal = ['a', 'i', 'u', 'e', 'o'];
let kataBaru = '';

for (let i = 0; i < kata.length; i++) {
    let huruf = kata[i];
    let hurufBaru = huruf;

    for (let j = 0; j < hurufVokal.length; j++) {
        if (huruf.toLowerCase() === hurufVokal[j]) {
            hurufBaru = '$';
        }
    }

    kataBaru += hurufBaru;
}

console.log(kataBaru);

//Pada program di atas, kita menggunakan dua loop for yang bertingkat. Loop pertama
//digunakan untuk mengecek setiap huruf pada kata, sedangkan loop kedua digunakan
//untuk mengecek apakah huruf yang sedang dicek merupakan huruf vokal atau bukan. 
//Jika huruf tersebut merupakan huruf vokal, maka huruf akan diganti menjadi $.