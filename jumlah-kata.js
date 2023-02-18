function hitungJumlahKata(kalimat) {
    let jumlahKata = 0;
    let kataSekarang = '';

    for (let i = 0; i < kalimat.length; i++) {
        // Jika karakter sekarang bukan spasi, tambahkan ke kataSekarang
        if (kalimat[i] !== ' ') {
            kataSekarang += kalimat[i];
        }
        // Jika karakter sekarang adalah spasi atau sudah mencapai akhir kalimat, maka akhiri kataSekarang
        if (kalimat[i] === ' ' || i === kalimat.length - 1) {
            // Jika kataSekarang memiliki minimal 1 huruf, maka tambahkan ke jumlahKata
            if (kataSekarang.length > 0) {
                jumlahKata++;
            }
            kataSekarang = '';
        }
    }

    return jumlahKata;
}

//Cara kerja program ini adalah dengan mengiterasi setiap karakter dalam kalimat menggunakan loop for. 
//Ketika menemukan sebuah karakter yang bukan spasi, karakter tersebut ditambahkan ke variabel kataSekarang. 
//Ketika menemukan sebuah karakter spasi atau telah mencapai akhir kalimat, maka kata yang terbentuk pada kataSekarang dihitung. 
//Namun, kata yang dihitung hanya jika kataSekarang memiliki panjang minimal 1, yaitu minimal terdapat 1 huruf. 
//Jumlah kata yang terhitung kemudian dikembalikan sebagai output dari fungsi.