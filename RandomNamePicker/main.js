/**
 * RandomNamePicker
 * M04 UF3 A1. Java Script
 * @author  Javier Amaya (JAB)
 * @since   03/01/2023
 * @todo    Carregar noms de fitxer, JSON i XML
 * @todo    EGU
 * @todo    obtenir noms de fitxer JSON o XML
 **/
// In this mode you can not use undeclared variables.
// Helps you to write clear code.
"use strict"

//Definició d'un array de noms
const arrayNoms = ["alum1","alum2","alum3"]
let posUsuari=0; //

function obtenirNom(Noms){
    // Returns a random integer from 0 to 9:  Math.floor(Math.random() * 10);
    return Noms[Math.floor(Math.random() * Noms.length)]
}

console.log( "Alumne: ",obtenirNom(arrayNoms));
console.log(`Alumne: ${obtenirNom(arrayNoms)}`); //
