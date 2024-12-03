import { fetchQuotes } from "./fetchQuotes.js";
import { postNewQuote } from "./postNewQuote.js";

async function init() {
    await getAndDisplayNewQuote();

    const getQuoteButton = document.querySelector("#get-quote-button");
    getQuoteButton.addEventListener("click", async ()=> {
        await getAndDisplayNewQuote();
    });
    
    const addQuoteForm = document.querySelector("#add-quote-form");
    addQuoteForm.addEventListener("submit", async(event) => {
        console.log("submitted");
        event.preventDefault();
        event.stopPropagation();
        await addQuote();
    });
}
init();

async function getAndDisplayNewQuote() {
    try {
        const data = await fetchQuotes()
        console.log(data);
        const quoteTextElement = document.querySelector(".quote-text");
        const random = Math.floor(Math.random() * data.length);
        quoteTextElement.textContent = data[random].quote;
    } catch (error) {

    }
}

async function addQuote() {
    const quoteInputElement = document.querySelector("#add-quote-input");
    const quote = quoteInputElement.value;
    const data = await postNewQuote(quote);
    console.log(data);
}
