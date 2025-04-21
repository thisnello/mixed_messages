import {createNumEl, createJokeEl, createQuoteEl} from "./modules/createElement.js";
import {luckyNum, randJoke, randQuote} from "./modules/generateRandom.js"
//DOM Elements
const numElement = createNumEl(luckyNum);
const jokeElement = createJokeEl(randJoke);
const quoteElement = createQuoteEl(randQuote);
const numbox = document.getElementById('num-box');
const jokebox = document.getElementById('joke-box');
const quotebox = document.getElementById('quote-box');
numbox.insertAdjacentHTML("beforeend", numElement);
jokebox.insertAdjacentHTML("beforeend",jokeElement);
quotebox.insertAdjacentHTML("beforeend",quoteElement);