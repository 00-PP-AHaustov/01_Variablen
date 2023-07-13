"use strict";

/***** Variablen 01 *******/
// let firstName = "Blub";
/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hi");
// console.log(firstName);


/***** 02 Deklaration + Wertzuweisung I *******/

// let familyName;
// familyName = "Mütze";
// console.log(familyName);

/***** 03 Deklaration + Wertzuweisung II  *******/

// let firstName , familyName;
// firstName = prompt("Bitte Vornamen eingeben:");
// familyName = prompt("Bitte Nachnamen eingeben:");

// console.log(firstName + " " + familyName);

// let test;
// test = "11";

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

/**** 04 Beispiel - Deklaration ****/

let ageJohn, ageMark;
const birthYearJohn = 2000;
const birthYearMark = 1990;

let date =new Date();
let year = date.getFullYear();
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

console.log(ageJohn);
console.log(ageMark);