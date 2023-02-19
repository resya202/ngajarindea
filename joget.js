function countScore(exercise, userInput) {
    let score = 0;
    let totalScore = exercise.length * 10;

    for (let i = 0; i < exercise.length && i < userInput.length; i++) {
        if (exercise[i] === userInput[i]) {
            score += 10;
        }
    }

    let percentage = Math.floor((score / totalScore) * 100);

    let category = 'Bad';
    if (percentage >= 60 && percentage < 80) {
        category = 'Good';
    } else if (percentage >= 80 && percentage < 100) {
        category = 'Great';
    } else if (percentage === 100) {
        category = 'Perfect';
    }

    return `Anda mendapatkan score ${score} / ${totalScore}. Persentase: ${percentage}%, Kategori : ${category}`;
}

let exercise = '<>^v>>>';
let userInput = '<>^^>><';

console.log(countScore(exercise, userInput)); //  mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good

exercise = '<>^v';
userInput = '<>^v';

console.log(countScore(exercise, userInput)); //  mendapatkan score 40 / 40. Persentase: 100%, Kategori : Perfect

exercise = '<>^v';
userInput = '<';

console.log(countScore(exercise, userInput)); // Input yang anda masukkan tidak lengkap!


// Fungsi countScore menerima dua parameter, yaitu exercise dan userInput.
// Variabel score diinisialisasi dengan nilai 0, 
//sedangkan variabel totalScore diinisialisasi dengan nilai exercise.length * 10.
// Dalam loop for, setiap karakter pada exercise dan userInput dibandingkan. 
//Jika keduanya sama, maka nilai score ditambah dengan 10.
// Setelah selesai loop for,
// persentase kesamaan dihitung dengan rumus (score / totalScore) * 100. 
//Nilai persentase dibulatkan ke bawah menggunakan Math.floor.
// Kategori diberikan berdasarkan nilai persentase. 
//Jika nilai persentase >= 60 dan < 80, maka kategori adalah "Good". 
//Jika nilai persentase >= 80 dan < 100, maka kategori adalah "Great". 
//Jika nilai persentase adalah 100, maka kategori adalah "Perfect".
// Fungsi countScore mengembalikan string yang berisi informasi skor, 
//persentase, dan kategori.
// Di dalam console.log, 
//fungsi countScore dipanggil tiga kali dengan parameter yang berbeda,
// dan output yang dihasilkan ditampilkan di console.