// MILESTONE 1

// CALC NUMBERS FROM 1 TO 100
for(let i = 1; i <= 100; i++) {
    let fizzOrBuzz;
    let colourFizzBuzz;

    // PRINT FIZZ FOR THE MULTIPLES OF 3 / PRINT BUZZ FOR THE MULTIPLES OF 5
    if (i % 3 === 0) {
        fizzOrBuzz = "fizz";
        colourFizzBuzz = "fizz";
    } else if (i % 5 === 0)  {
        fizzOrBuzz = "buzz";
        colourFizzBuzz = "buzz";
    } 

    // PRINT FIZZBUZZ FOR THE MULTIPLES OF BOTH 3 AND 5
    if (i % 15 === 0)  {
        fizzOrBuzz = "fizzbuzz";
        colourFizzBuzz = "fizzbuzz";
    }

    // MILESTONE 2 + MILESTONE 3

    // ADD THE ELEMENTS TO THE HTML

    const numbersContainer = document.getElementById("numbers-container");

    // CREATE THE BOXES WITH DIFFERENT COLOURS 

    const newBox = `<div class="box ${colourFizzBuzz}">${fizzOrBuzz || i}</div>`;
    numbersContainer.innerHTML += newBox;

}


