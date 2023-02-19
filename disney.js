let wahana = "Wahana Utara";
let usia = 28;
let saldo = 180000;
let tarif;

switch (wahana) {
    case "Wahana Utara":
        if (usia >= 2 && usia <= 12) {
            tarif = 85000;
        } else if (usia >= 13 && usia <= 49) {
            tarif = 125000;
        } else if (usia >= 50) {
            tarif = 125000;
        } else {
            console.log("Dilarang Masuk");
            break;
        }
        break;
    case "Wahana Selatan":
        if (usia >= 2 && usia <= 12) {
            tarif = 143000;
        } else if (usia >= 13 && usia <= 49) {
            tarif = 165000;
        } else if (usia >= 50) {
            tarif = 165000;
        } else {
            console.log("Dilarang Masuk");
            break;
        }
        break;
    default:
        console.log("Tiket tidak ditemukan!");
        break;
}

if (tarif !== undefined) {
    if (saldo >= tarif) {
        let sisa_saldo = saldo - tarif;
        console.log(`Sisa saldo anda adalah Rp ${sisa_saldo},00. Selamat bermain.`);
    } else {
        let selisih_saldo_dan_tarif = tarif - saldo;
        console.log(`Saldo anda kurang Rp ${selisih_saldo_dan_tarif},00. Tidak cukup untuk membeli tiket.`);
    }
}


// Variabel wahana, usia, dan saldo diisi sesuai dengan contoh input.
// Variabel tarif diinisialisasi dengan undefined untuk menandakan bahwa nilai ini akan diisi kemudian oleh program.
// Digunakan switch untuk mengecek wahana yang dipilih oleh pengunjung.
// Pada masing-masing case (yaitu Wahana Utara dan Wahana Selatan), 
//digunakan if untuk mengecek kategori umur pengunjung dan menentukan tarif yang sesuai.
// Jika kategori umur tidak sesuai, 
//maka akan langsung ditampilkan pesan "Dilarang Masuk" dan program akan berhenti di situ.
// Jika wahana tidak ditemukan, 
//maka akan ditampilkan pesan "Tiket tidak ditemukan!".
// Jika tarif sudah ditemukan (yaitu tidak undefined),
// maka akan dilakukan pengecekan apakah saldo cukup untuk membeli tiket.
// Jika saldo cukup,
// maka akan dihitung sisa saldo dan ditampilkan pesan "Sisa saldo anda adalah Rp ... Selamat bermain.".
// Jika saldo tidak cukup,
// maka akan dihitung selisih antara saldo dan tarif dan ditampilkan pesan "Saldo anda kurang Rp ... Tidak cukup untuk membeli tiket.".
// Sesuaikan nilai dari variabel wahana, usia, dan saldo sesuai dengan contoh input atau masukan nilai lainnya untuk menguji program.