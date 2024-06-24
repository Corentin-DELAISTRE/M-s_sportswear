//VALIDATIONS DES DONNEES DU FORMULAIRES


/**
 * Rôle : Informe l'utilisateur que le champ rempli est incorrect (affiche une erreur)
 * @param {string} id l'id de l'input dans lequel il ya une erreur
 * @param {string} messageErreur le message à afficher
 */
function afficheErreur (id,messageErreur){
    let input = document.getElementById(id)
    input.classList.add("input-error")
    let p = document.getElementById("error-"+id)
    p.innerText = messageErreur
    p.classList.remove("d-none")
}
/**
 * Role : enlève l'erreur sur l'input et cache le paragraphe associé
 * @param {string} id 
 */
function enleveErreur(id){
    
    let input = document.getElementById(id)
    input.classList.remove("input-error")
    let p = document.getElementById("error-"+id)
    p.innerText = ""
    p.classList.add("d-none")
}
/**
 * Rôle : cherche dans une chaine de caractère s'il y a une balise script (si quelqu'un essaye d'ajouter du code)
 * @param {string} text 
 * @returns 
 */
function hasCode(text){
    let reg = /<script/
    return reg.test(text)
}

let nom = document.getElementById("nom")
nom.addEventListener("change",testNom)
/**
 * Rôle : tester si lutilisateur a bien rempli le champ concernant son nom sinon je lui affiche une erreur
 * @returns "true ou false" soit le champ est correctement rempli ou non
 */
function testNom(){
    if(nom.value == ""){//Je regarde si le champ est vide
        afficheErreur("nom","Ce champ ne peut pas être vide")
        return false
    }else{
    let reg = /^[a-zA-ZÀ-ÖØ-öø-ÿ '-]/
        if(reg.test(nom.value) === false){ //Je regarde si le champ est remplie selon le bon format       
                afficheErreur("nom", "Ce champ ne peut pas comporter de caractères speciaux")
                return false
            }else if(hasCode(nom.value)){//Je regarde si l'utilisateur essaye d'injecter du code
                afficheErreur("nom","Vous ne pouvez pas injecter du code")
                return false
            }else if(nom.value.length > 50){// Je regarde si ce n'est pas trop long
                afficheErreur("nom","Vous avez renseigné un nom trop long (50 caractères maximum)")
                return false
            }else if(nom.value.length < 2){//je regarde si ce n'est pas trop court
                afficheErreur("nom","Vous avez renseigné un nom trop court (2 caractères minimum)")
                return false   
            }
        enleveErreur("nom")
        return true
}
}

let prenom = document.getElementById("prenom")
prenom.addEventListener("change",testPrenom)


/**
 * Rôle : tester si lutilisateur a bien rempli le champ concernant son prenom sinon je lui affiche une erreur
 * @returns "true ou false" soit le champ est correctement rempli ou non
 */
function testPrenom(){
    if(prenom.value == ""){
        afficheErreur("prenom","Ce champ ne peut pas être vide")
        return false
    }else{
    let reg = /^[a-zA-ZÀ-ÖØ-öø-ÿ '-]/
        if(reg.test(prenom.value) === false){       
                afficheErreur("prenom", "Ce champ ne peut pas comporter de caractères speciaux")
                return false
            }else if(hasCode(prenom.value)){
                afficheErreur("prenom","Vous ne pouvez pas injecter du code")
                return false
            }else if(prenom.value.length > 50){
                afficheErreur("prenom","Vous avez renseigné un prenom trop long (50 caractères maximum)")
                return false
            }else if(prenom.value.length < 2){
                afficheErreur("prenom","Vous avez renseigné un prenom trop court (2 caractères minimum)")
                return false   
            }
        enleveErreur("prenom")
        return true
}
}

let email = document.getElementById("email")
email.addEventListener("change",testEmail)

/**
 * Rôle : tester si lutilisateur a bien rempli le champ concernant son adresse email  sinon je lui affiche une erreur
 * @returns "true ou false" soit le champ est correctement rempli ou non
 */
function testEmail(){
    if(email.value == ""){
        afficheErreur("email","Ce champ ne peut pas être vide")
        return false
    }else{
    let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(reg.test(email.value) === false){
            afficheErreur("email", "Ce n'est pas un format d'email valide")
                return false
            }else if(hasCode(email.value)){
                afficheErreur("email","Vous ne pouvez pas injecter du code")
                return false
            }else if(email.value.length >100){
                afficheErreur("email","L'email renseigné est trop long (100 caractères maximum)")
                return false
            }  
        }
        enleveErreur("email")
        return true
}

let objet = document.getElementById("objet")
objet.addEventListener("change",testObjet)
objet.addEventListener("change",objetProduit)

/**
 * Rôle : Si mon utilisateur ne choisis pas d'objet je lui affiche une erreur
 * @returns "true ou false" soit le champ est correctement rempli ou non
 */
function testObjet(){
    if(objet.value === "defaut"){
        afficheErreur("objet","Veuillez choisir un objet")
        return false
    }else{
        enleveErreur("objet")
        return true
    }
}
/**
 * Rôle : Si l'utilisateur choisis un objet en rapport avec un produit alors j'affiche le champ pour renseigner la référence du produit
 * @returns Rien
 */
function objetProduit(){
    let refDiv = document.getElementById("ref-div")
    if(objet.value === "info-prod" || objet.value === "pb-produit"){
        refDiv.classList.remove("d-none")
    }else{
        refDiv.classList.add("d-none")
    }
}
let ref =document.getElementById("ref")
ref.addEventListener("change",testRef)

/**
 * Rôle : tester si lutilisateur a renseigné une référence valide sinon je lui affiche une erreur
 * @returns "true ou false" soit le champ est correctement rempli ou non
 */
function testRef(){
    if(ref.value == ""){
        afficheErreur("ref","Ce champ ne peut pas être vide")
        return false
    }else{
    let reg = /^[a-zA-Z]{3}-\d{6}$/
        if(reg.test(ref.value) === false){
            afficheErreur("ref", "Ce n'est pas un format valide. La référence doit être composée de 3 lettres,  un tiret et 6 chiffres (ex: XXX-123456)")
                return false
            }else if(hasCode(ref.value)){
                afficheErreur("ref","Vous ne pouvez pas injecter du code")
                return false 
        }
        enleveErreur("ref")
        return true
    }
}

let message = document.getElementById("message")
message.addEventListener("change",testMessage)

/**
 * Rôle : Si l'utilisateur ne rempli pas le champ ou éssaye d'injecter du code alors je lui affiche une erreur
 * @returns "true ou false" soit le champ est correctement rempli ou non
 */
function testMessage(){
    if(message.value == ""){
        afficheErreur("message","Ce champ ne peut pas être vide")
        return false
    }else{
        if(hasCode(message.value)){
            afficheErreur("message","Vous ne pouvez pas injecter du code")
            return false
        }
        enleveErreur("message")
        return true
    }
}

let monform = document.getElementById("contact-form")
monform.addEventListener("submit",(e)=>{// A la soumission du formulaire
    
    e.preventDefault() //J'attends avant d'envoyer le formulaire
    // Je refais passer toutes mes fonctions de tests sur mon formulaire
    let test1 = testNom()
    let test2 = testPrenom()
    let test3 = testEmail()
    let test4 = testObjet()
    let test5 = testRef()
    let test6 = testMessage()
    //Si une d'entre elle retourne false
    if(test1 === false || test2 === false || test3 === false || test4 === false || test5 === false || test6 === false){
        //Le formulaire n'est pas envoyé (on ne fait rien du coup)

    }else{//sinon elles retournent toutes true
         
        //j'envoie le formulaire
        //Ici il devrait y avoir du code pour recupérer les données renseignées par l'utilisateur
    }

})