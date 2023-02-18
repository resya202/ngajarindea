let kata = "" // isi dengan value yang diinginkan

if (typeof kata === 'string') {
    console.log(`username ${kata}`);
} else if (typeof kata === 'number') {
    console.log(`age: ${kata}`);
} else if (typeof kata === 'boolean') {
    if (kata) {
        console.log('thank you for agreeing');
    } else {
        console.log('cannot proceed without agreement');
    }
} else {
    if (isNaN(kata) || kata === '' || kata === undefined || kata === null) {
        console.log('Invalid data');
    }
}

//Program di atas menggunakan conditional branching yang terdiri dari if, else if, dan else
//Setiap kondisi dibuat dengan memanfaatkan typeof untuk mengecek tipe data dari variabel kata.
//Jika tipe datanya adalah string, maka program akan menampilkan pesan 'username' diikuti dengan nilai dari variabel kata menggunakan template literals.
//Jika tipe datanya adalah number, maka program akan menampilkan pesan 'age' diikuti dengan nilai dari variabel kata menggunakan template literals.
//Jika tipe datanya adalah boolean, maka program akan mengecek apakah nilainya true atau false. 
//Jika true, program akan menampilkan pesan 'thank you for agreeing', 
//dan jika false, program akan menampilkan pesan 'cannot proceed without agreement'.
//Jika tipe datanya tidak termasuk ke dalam kategori di atas, 
//maka program akan mengecek apakah nilai dari variabel kata adalah angka 0 atau empty string atau undefined atau null atau NaN. 
//Jika benar, program akan menampilkan pesan 'Invalid data'.