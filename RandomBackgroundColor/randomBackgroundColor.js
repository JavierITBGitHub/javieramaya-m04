/**
 * randomBackgroundColor
 * M04 UF3 A1. Java Script
 * @author  Javier Amaya (JAB)
 * @since   06/01/2023
 * @todo    Carregar noms de fitxer, JSON i XML
 * @todo    EGU
 * @todo    obtenir noms de fitxer JSON o XML

source: https://blog.hubspot.com/website/what-is-javascript
**/
// ---  the code which uses the functions  ---
randomBackgroundColor()

// --- helper functions ---

function randomBackgroundColor(){
//Function for generating a hex number for new random BG colors
   let randomHex = Math.floor(Math.random()*900000) + 100000;
   //The following line of code will target the HTML element and attribute you wish to change
   //and then insert the hex number using a string literal.
   //The first part of the code above selects the body of the HTML and targets the background color.
   //The second part `#${randomHex}` uses a string literal (identified by the backtick ")
   //allows you to concatenate — or join — the # which identifies a hexadecimal number
   //with the value inside of our variable randomHex.
   document.querySelector('body').style.backgroundColor = `#${randomHex}`;
}



