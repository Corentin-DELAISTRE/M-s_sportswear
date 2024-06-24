
let access = document.getElementById("myonoffswitch") //Je vais chercher mon bouton
access.addEventListener("change",()=>{//Je pose un écouteur d'évènement au changement de mon bouton et j'applique la fonction qui suit
    let produitCard = document.querySelectorAll(".produit-card")//Je vais chercher toutes mes cartes produit dans ma page catégorie baskets 
    let body = document.querySelectorAll("body *")//Je récupère tous les éléments de mon body
    let reg = /^H[1-5]/     //Je déclare une expression régulière pour une chaine de caractère correspondant à un H majuscule suivit d'un chiffre entre 1 et 5 (Les h6 sont des titres d'articles en police Roboto donc je les exclus)
    body.forEach(e =>{ //Pour chaque élément de mon body
        if(access.checked === true){//Si mon bouton est en mode actif (coché sur "ON")
            e.style.fontFamily = "Luciole" //La police du contenu de mon élément devient la "Luciole"
            produitCard.forEach(e =>{//pour chaque carte produit
                e.style.width = "30%"//Sa largeur passe à 30%
                e.style.height = "500px"//Sa hauteur passe à 500px  (Sinon le contenu sort de ma carte)
            })
        }else if(reg.test(e.nodeName) === true){ //sinon si mon élément est un titre 
            e.style.fontFamily = "Archivo"//sa police devient la "Archivo"
        }else{//sinon
            e.style.fontFamily = "Roboto"//La police de mon élément devient la "Roboto"
            produitCard.forEach(e =>{//pour chaque carte produit
                e.style.width = "23%"//Sa largeur reprend sa valeur initiale
                e.style.height = "400px" //Sa hauteur reprend sa valeur initiale
            })
        }
    })
})