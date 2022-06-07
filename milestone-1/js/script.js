// MILESTONE 1

// CALC NUMBERS FROM 1 TO 100
for(let i = 1; i <= 100; i++) {
    let fizzOrBuzz;

    // PRINT FIZZ FOR THE MULTIPLES OF 3 / PRINT BUZZ FOR THE MULTIPLES OF 5
    if (i % 3 === 0) {
        fizzOrBuzz = 'fizz';
    } else if (i % 5 === 0)  {
        fizzOrBuzz = 'buzz';
    } 

    // PRINT FIZZBUZZ FOR THE MULTIPLES OF BOTH 3 AND 5
    if (i % 15 === 0)  {
        fizzOrBuzz = 'fizzbuzz';
    }

    // PRINT IN THE BROWSER CONSOLE THE RESULT
    console.log(fizzOrBuzz, i);
}
