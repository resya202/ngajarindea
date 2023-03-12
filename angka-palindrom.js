
let angka = 5
let palindrome;

if (angka <= 10){
    palindrome = angka + 1 
    console.log(palindrome)
} else if (angka < 100){
    for (i = angka; angka < 100; i++){
            angka++
            if(angka.toString()[0] === angka.toString()[1]){
                palindrome = angka
                console.log(palindrome);
                break
            }
        }
} else if (angka < 1000){
    for (j = angka; angka < 1000; j++){
            angka++
            if(angka.toString()[0] === angka.toString()[2]){
                palindrome = angka
                console.log(palindrome);
                break
            }
        }
}

//Fungsi angkaPalindrome menerima sebuah argumen num.
//Fungsi isPalindrome menerima sebuah argumen number dan mengembalikan nilai boolean true jika number adalah sebuah palindrome dan false jika tidak.
//Fungsi isPalindrome bekerja dengan mengubah angka number menjadi sebuah string strNum. Kemudian, 
//fungsi menggunakan loop while dan mengiterasi huruf-huruf di strNum. Jika terdapat sebuah huruf di strNum yang tidak sama dengan huruf yang berlawanan di strNum, 
//maka fungsi mengembalikan false. Jika seluruh huruf di strNum sama dengan huruf yang berlawanan di strNum, maka fungsi mengembalikan true.
//Fungsi angkaPalindrome pertama-tama menaikkan nilai num sebesar 1 menggunakan operator ++.
//Kemudian, fungsi melakukan loop while untuk mengecek apakah nilai num adalah sebuah palindrome. Jika bukan, maka fungsi menaikkan nilai num sebesar 1 menggunakan operator ++.
//Ketika nilai num adalah sebuah palindrome, fungsi mengembalikan nilai num.
