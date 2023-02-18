let row = 5;
let coordinate = '45';

let temp = '';
for (let i = 0; i < row; i++) {
    let line = '';
    for (let j = 0; j < 5; j++) {
        if (i === Number(coordinate[0]) - 1 && j === Number(coordinate[1]) - 1) {
            line += '*';
        } else {
            line += '#';
        }
    }
    temp += line + '\n';
}
console.log(temp);



//Pertama-tama, kita buat variabel temp yang akan menampung output. 
//Kemudian, kita lakukan looping sebanyak row kali untuk membuat baris-baris. 
//Di dalamnya, kita lakukan looping sebanyak 5 kali untuk membuat kolom. 
//Pada setiap iterasi, 
//kita periksa apakah indeks baris dan kolom saat ini sama dengan indeks yang diberikan pada variabel coordinate. 
//Jika ya, maka kita tambahkan karakter asterisk (*) ke dalam line, 
//jika tidak, maka kita tambahkan karakter pagar (#) ke dalam line. 
//Setelah membuat satu baris,
// kita tambahkan line ke dalam variabel temp dan kita berikan karakter newline (\n). 
//Setelah selesai melakukan looping, kita tampilkan isi dari variabel temp menggunakan console.log().