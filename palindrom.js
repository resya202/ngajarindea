// palindrom
let kata = 'katak';
let palindrome = true;

for (let i = 0; i < kata.length / 2; i++) {
    if (kata[i] !== kata[kata.length - 1 - i]) {
        palindrome = false;
        break;
    }
}

console.log(palindrome);

//Pertama-tama, kita inisialisasi variabel kata dengan string yang akan dicek apakah palindrome atau tidak. Selanjutnya, 
//kita inisialisasi variabel palindrome dengan nilai true yang akan digunakan untuk menampung hasil pengecekan.
//Selanjutnya, kita menggunakan loop for untuk mengecek karakter pada setengah bagian pertama dari string kata,
//dan membandingkannya dengan karakter pada setengah bagian kedua dari string kata (karakter yang dibaca dari belakang), 
//sampai dengan pertengahan string kata. Jika ada karakter pada setengah bagian pertama yang tidak 
//sama dengan karakter pada setengah bagian kedua dari string kata, 
//maka kita ubah nilai variabel palindrome menjadi false, 
//dan keluar dari loop menggunakan keyword break.
// Terakhir, kita tampilkan hasil pengecekan palindrome 
//atau tidak dengan mencetak nilai variabel palindrome ke konsol.