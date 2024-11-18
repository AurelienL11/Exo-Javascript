//exo 1
//const nom = "Martin"
//const anneeNaissance = 2000
//console.log(`Bonjour Mr ${nom} vous avez ${2024 - anneeNaissance} ans.`)   //

//exo 2
//let note_maths = 15
//let note_français = 15
//let note_HG = 9
//let moyenne = ((note_maths + note_français + note_HG)/3)
//console.log(`La moyenne est de ${moyenne}/20`)

//exo 3
//let sexe = "Homme"
//if (sexe === "Homme") {
//  console.log("Homme")
//}
//else console.log("Femme")

//exo 4
//let heure = 8
//if (heure < 12) {
//    console.log("matin")
//}
//else if (heure >= 12 && heure < 18) {
//    console.log("après-midi")
//}
//else if (heure >= 18 && heure <= 24)
//    console.log("nuit")

//exo 5

//let choix = 4;         //change en message en fonction du choix
//if (choix === 1) {
//    console.log("Insérer")
//} else if (choix === 2) {
//    console.log("Supprimer")
//} else if (choix === 3) {
//   console.log("Afficher")
//} else if (choix === 4) {
//    console.log("Ce choix existe pas")
//}

//exo 6
//let number = 6;
//
//if (number % 3 === 0 && number % 5 === 0) {                                     //verifie le reste, si le reste est zero dans les deux cas c'est un multiple
//    console.log("Le nombre est un multiple de 3 et de 5")
//}
//else{
//   console.log("le nombre n'est pas multiple de 3 et 5")
//}

//exo7
//const codesPostaux = [
//  "44000",
//  "44100",
//  "44200",
//  "44300",
//  "44400",
//  "44500",
//  "44600",
//  "44700",
//  "44800",
//  "44900",
//  "44115",
//  "44116",
//  "44117",
//  "44118",
//  "44119",
//  "44120",
//  "44130",
//  "44140",
//  "44150",
//  "44160",
//  "44170",
//  "44180",
//  "44190",
//  "44210",
//  "44220",
//  "44230",
//  "44240",
//  "44250",
//  "44260",
//  "44270",
//  "44290",
//  "44310",
//  "44320",
//  "44330",
//  "44340",
//  "44350",
//  "44360",
//  "44370",
//  "44380",
//  "44390",
//  "44410",
//  "44420",
//  "44430",
//  "44440",
//  "44450",
//  "44460",
//  "44470",
//  "44480",
//  "44490",
//  "44510",
//  "44520",
//  "44530",
//  "44540",
//  "44550",
//  "44560",
//  "44570",
//  "44580",
//  "44590",
//  "44610",
//  "44620",
//  "44630",
//  "44640",
//  "44650",
//  "44660",
//  "44670",
//  "44680",
//  "44690",
//  "44710",
//  "44720",
//  "44730",
//  "44740",
//  "44750",
//  "44760",
//  "44770",
//  "44780",
//  "44790",
//  "44810",
//  "44820",
//  "44830",
//  "44840",
//  "44850",
//  "44860",
//  "44870",
//  "44880",
//  "44890",
//  "44910",
//  "44920",
//  "44930",
//  "44940",
// "44950",
//];
//for (let i = 0; i < codesPostaux.length; i++) {  //continue en boucle jusqu'a afficher tout les chiffres
//  console.log(codesPostaux[i]);
//}

//exo8
//let chiffre = 0
//while (chiffre <= 20) {
//    if (chiffre === 10) {
//        console.log("chiffre 10")
//    } else {
//        console.log(chiffre)
//    }
//    chiffre += 2
//}

//exo9
//function pairOuImpair(num) {           //verifie si il y'a un reste a num, si oui alors le chiffre est impair, si non aucun reste il est pair car divisible par 2
//  if (num % 2 === 0) {
//    console.log(num + " pair")
//  } else {
//    console.log(num + " impair")
//  }
//}
//function genererSuite() {
//  for (let i = 0; i < 5; i++) {                     //crée une suite de 5 nombres aléatoire
//    const nombreAleatoire = Math.floor(Math.random() * 1000)
//    console.log(nombreAleatoire)
//    pairOuImpair(nombreAleatoire)           //applique la fonction "pair ou impair" faite en haut au nombre aléatoire, dit si pair ou impair
//  }
//}
//genererSuite() //genere la suite

//exo10
//const number = Math.floor(Math.random() * 900) + 100 // prend un chiffre entre 100 et 999
//console.log("Chiffre de base: ", number)
//let count = 0
//let tirage = 0
//while (tirage !== number) {             //temps que le tirage n'a pas atteint le number il continue sa boucle et rajoute 1 grace au count
//    tirage = Math.floor(Math.random() * 900) + 100
//    count++
//}
//console.log("Chiffre tirages :", count) //affiche le count total

//exo11
//let dateActuelle = new Date()
//let annee = dateActuelle.getFullYear()
//let mois = dateActuelle.getMonth() + 1
//let jour = dateActuelle.getDate()
//let heure = dateActuelle.getHours()
//console.log(`Aujourd'hui nous sommes le ${jour}/${mois}/${annee} et il est ${heure}h`)

//exo 1 partie 2
//let prenom = prompt("Indiquez votre prénom").toLowerCase()                                     //toLowerCase permet a l'utilisateur d'écrire le mot peut importe les majuscules et minuscules, le mot dans la console sera en minuscule
//let age = prompt("Indiquez votre âge")
//console.log(`Je m'appelle ${prenom} et j'ai ${age}`)

//exo 2 partie 2
//let longueur = prompt("Quel est la longueur ?")
//let largeur = prompt("Quel est la largeur ?")
//let surface = (longueur*largeur)
//console.log(`le rectangle de longueur ${longueur}cm et de largeur ${largeur}cm a pour surface ${surface}cm2`)

//exo 3 partie 2
//let temperatureCelsius = prompt("Quel est la température en Celsius")                                  //prompt force la chaine de caractères
//let temperatureKelvin  = temperatureCelsius * 1 + 273.15                                              //le * 1 force la conversion en chaine de nombre
//console.log(`la température de ${temperatureCelsius}°Celsius vaut ${temperatureKelvin}`)

//exo 4 partie 2
// let paragraphe = document.getElementById("p1")
// let y = parseInt(prompt("Valeur de y"))
// let x = parseInt(prompt("Valeur de x?"))
// if (x > y){
//     paragraphe.textContent = `x est plus grand que y`
// } else if (x <= y){
//     paragraphe.textContent = `x est plus petit que y`
// }

//exo 1 partie 3
// function longueurChaine(chaine) {
//     return chaine.length
// }
// console.log(longueurChaine("testchainecaractèresnombres"))

//exo 2 partie 3
//function elementPresent(tableau, element) {
//    return tableau.includes(element)
//}
//console.log(elementPresent(["A", "B", "C", "D"], "T"))  //t n'est pas dans le tableau donc false
//console.log(elementPresent(["A", "B", "C", "D"], "B"))  //b est dans le tableau donc true

//exo 3 partie 3
// function compterElements(tableau){
//     return tableau.length
// }
// console.log(compterElements(["A", "B", "C", "D"]))
    
//exo 4 partie 3
// function chaineEnMots(phrase){
//     return phrase.split(` `)
// }
// console.log(chaineEnMots("nombre de mots ?"))
 
//exo 5 partie 3
//function filtrerNombres(tableau, valeur) {
//    return tableau.filter(function(element) {
//        return element > valeur
//    })
//}
//console.log(filtrerNombres([8, 2, 2, 3, 9], 4))

//exo 6 partie 3
// function ajouterPropriete(objet, cle, valeur) {
//     objet[cle] = valeur
//     return objet       
//   }
  
//   let obj = {}
//   ajouterPropriete(obj, "exmpleclé", "exedmplevaleur")
//   console.log(obj)

//exo 7 partie 3
// let tableau1 = [1, 2, 3]
// let tableau2 = [4, 5, 6]
// function fusionnerTableaux(tableau1, tableau2) {
//     return tableau1.concat(tableau2)
// }

// console.log(fusionnerTableaux(tableau1, tableau2))

//exo 8 partie 3
// function inverserTableaux(tableau){
//     return tableau.reverse()
// }

// console.log(inverserTableaux([1, 2, 3]))

//exo 9 partie 3
// function extraireSousTableau(tableau, debut, fin) {
//     return tableau.slice(debut, fin)
// }
// let lettres = ["a", "b", "c", "d", "e"]
// console.log(extraireSousTableau(lettres, 1, 4))

//exo10 partie 3
// let phrase = "le feu est rouge"
// let ancienMot = "rouge"
// let nouveauMot = "vert"
// function remplacerMot(phrase, ancienMot, nouveauMot) {
//     return phrase.replace(ancienMot, nouveauMot)
// }

// console.log(remplacerMot(phrase, ancienMot, nouveauMot))

