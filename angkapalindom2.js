

    let angka = 75;
    
    while (true) {
        angka++;
        let angkaString = angka.toString();
        let reversedString = '';

        for (let i = angkaString.length - 1; i >= 0; i--) {
            reversedString += angkaString[i];
        }

        if (angkaString === reversedString) {
            console.log(angka);
        }
    }
