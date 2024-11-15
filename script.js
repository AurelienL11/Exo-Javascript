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

//let choix = 4;         //change e message en fonction du choix
//if (choix === 1) {
//    console.log("Insérer")
//} else if (choix === 2) {
//    console.log("Supprimer")
//} else if (choix === 3) {
//   console.log("Afficher")
//} else if (choix === 4) {
//    console.log("Ce choix n’existe pas")
//}

//exo 6
//let number = 6;
//
//if (number % 3 === 0 && number % 5 === 0) {                                     //verifie le reste, si le reste est zero dans les deux cas c'est un multiple
//    console.log("Le nombre est un multiple de 3 et de 5.")
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
//  "44950",
//];
//for (let i = 0; i < codesPostaux.length; i++) {  //continue en boucle jusqu'a afficher tout les chiffres
//  console.log(codesPostaux44[i]);
//}

//exo8
//let valeur = 0;
//while (valeur <= 20) {
//    if (valeur === 10) {
//        console.log("Chiffre 10")
//    } else {
//        console.log(valeur)
//    }
//    valeur += 2
//}

//exo9
//function verifierPairOuImpair(num) {   //verifie si il y'a un reste a num, si oui alors le chiffre est impair, si non aucun reste il est pair car divisible par 2
//  if (num % 2 === 0) {
//    console.log(num + " pair")
//  } else {
//    console.log(num + " impair")
//  }
//}
//function genererSuite() {
//  for (let i = 0; i < 5; i++) {
//    const nombreAleatoire = Math.floor(Math.random() * 1000)
//    console.log(nombreAleatoire)
//    verifierPairOuImpair(nombreAleatoire)
//  }
//}
//genererSuite()

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