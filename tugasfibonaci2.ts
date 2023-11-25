function intToRoman(num: number): string {
    const romanNumerals: { [key: number]: string } = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    };

    const values = Object.keys(romanNumerals)
        .map(Number)
        .sort((a, b) => b - a);

    let result = '';

    for (const value of values) {
        while (num >= value) {
            result += romanNumerals[value];
            num -= value;
        }
    }

    return result;
}

// Contoh penggunaan untuk angka 1 sampai 1646
for (let i = 1; i <= 1646; i++) {
    const romanNumeral = intToRoman(i);
    console.log(`${i} dalam angka Romawi adalah: ${romanNumeral}`);
}