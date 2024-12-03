import {API_URL} from "./constants.js";
export async function postNewQuote(quote) {
    try {
        const response = await fetch(API_URL, {
           method: "POST",
           headers: {
            "Content-Type": "application/json",
           }, 
           body: JSON.stringify({quote}),
        });
        if(!response.ok){
          throw new Error("Network response was not okay");
        }
         const data = await response.json();
         return data;
       }  catch (error) {
         console.error("Error fetching data:", error);
         throw error;
       }
}
