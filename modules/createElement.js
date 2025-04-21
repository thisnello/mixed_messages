//this file is to create elements to add in the html

const createNumEl = function(num){
    return `<p id="luckyNum">Il tuo numero fortunato è: <span>${num}</span></p>`;
}

const createJokeEl = function(joke){
    return `<p id="randJoke">Ecco una barzelletta per te: <span>${joke}</span></p>`;
}

const createQuoteEl = function(quote){
    return `<p id="randQuote">Trova un po' di ispirazione con la seguente frase:<br><span>${quote}</span></p>`;
}

export {createNumEl, createJokeEl, createQuoteEl};