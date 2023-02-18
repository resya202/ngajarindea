function angkaPalindrome(num) {
    function isPalindrome(number) {
        let strNum = number.toString();
        let left = 0;
        let right = strNum.length - 1;
        while (left < right) {
            if (strNum[left] !== strNum[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    num++;
    while (!isPalindrome(num)) {
        num++;
    }
    return num;
}

//Fungsi angkaPalindrome menerima sebuah argumen num.
//Fungsi isPalindrome menerima sebuah argumen number dan mengembalikan nilai boolean true jika number adalah sebuah palindrome dan false jika tidak.
//Fungsi isPalindrome bekerja dengan mengubah angka number menjadi sebuah string strNum. Kemudian, 
//fungsi menggunakan loop while dan mengiterasi huruf-huruf di strNum. Jika terdapat sebuah huruf di strNum yang tidak sama dengan huruf yang berlawanan di strNum, 
//maka fungsi mengembalikan false. Jika seluruh huruf di strNum sama dengan huruf yang berlawanan di strNum, maka fungsi mengembalikan true.
//Fungsi angkaPalindrome pertama-tama menaikkan nilai num sebesar 1 menggunakan operator ++.
//Kemudian, fungsi melakukan loop while untuk mengecek apakah nilai num adalah sebuah palindrome. Jika bukan, maka fungsi menaikkan nilai num sebesar 1 menggunakan operator ++.
//Ketika nilai num adalah sebuah palindrome, fungsi mengembalikan nilai num.
