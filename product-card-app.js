/**
 * Rôle: Recupère mon json et execute les fonctions associées
 */
function appel() {
    fetch("./assets/donneesProduits/baskets.json")
        .then(res => {
            return res.json()
        })
        .then(rep => {
            trier(rep)
            containeDyn(rep)
            changePage()
            scrollTrig()
        }) 
}
appel()

/**
 * Regarde si la valeur de l'input correspond aux noms de mon tableau d'objet
 * @param {Array} data 
 * @returns Un tableau d'objet
 */
function searchBar(data){
    let search = document.getElementById("search").value.toLowerCase() //Je vais chercher la valeur de mon input et je passe tout en minuscule
    let newtab=[]       //Je crée un nouveau tableau vide
    data.forEach(e => { // Pour chaque objet de mon tableau d'objet
        let nom = e.nom.toLowerCase() //Je passe le nom en minuscule
        if(nom.search(search) !== -1){ // Si la catégorie contient ma recherche
            newtab.push(e) //Alors je rajoute cet élément dans mon tableau vide
        }
        
    });
    return newtab //Je retourne le tableau d'éléments qui ont été push
}
/**
 * Rôle = trier les éléments de mon tableau en fonction du prix
 * @param {object} data 
 */
function trier (data){
    let methodetri = document.getElementById("tri").selectedOptions[0].value //Je vais chercher la valeur de mon selecteur de methode de tri
    if(methodetri === "croiss"){// Si la valeur est "par prix croisssant"
        let byValue = (a,b)=> a.prix-b.prix //Je déclare une fonction de calcul pour avoir les prix du plus petit au plus grand
        data.sort(byValue) // Je trie mon tableau via la methode de calcul déclarée précédement
    }else if(methodetri=== "decroiss"){// Si la valeur est "par prix croisssant"
        let byValue = (a,b)=> b.prix-a.prix //Je déclare une fonction de calcul pour avoir les prix du plus grand au plus petit
        data.sort(byValue) //Je trie mon tableau via la methode de calcul déclarée précédement
    }
    return data //Je retourne mon tableau
}

/**
 * Rôle: Remplir mon container avec des cartes contenant chacune les infos de mes tous mes produits en fonction de ma recherche et de ma méthode de tri
 * @param {Array} data 
*/
function containeDyn(data){
    let container = document.getElementById("card-container")       //Je vais chercher mon container de cartes dans mon HTML
    data = searchBar(data)      //Mes données deviennent celles dont le nom contient ma recherche 
    data = trier(data)      //Mes données deviennent mes données triées en fonction de ce que je choisi comme de methode de tri
    container.innerHTML =""       //Je vide le contenu de mon container
    data.forEach(e => {     //Pour chaque élément de mes données
        
        //Je rajoute ce contenu en rapport avec mon élément dans mon container
            container.innerHTML +=`<article itemscope itemtype="http://schema.org/Product" class="produit-card w23 flexwrap g10">
                                        <div class="w100 img-card"><img itemprop="image" class="responsive-img" src="./assets/imagesProduits/${e.photo}" alt="image de la paire de baskets ${e.nom}"/></div>
                                        <div class="produitcard-text flexwrap g10">
                                        <div class="w100 flexwrap spacebetween align-center">
                                                <h6 class="w50"><strong itemprop="name">${e.nom}</strong></h6>
                                                
                            <span itemprop="offers" itemscope itemtype="http://schema.org/Offer"><p itemprop="price" class="prix">${e.prix}€</p></span>
                                            </div>
                                            <p itemprop="description">${e.description}</p> 
                                        </div>
                                    </article>`  
})
}

let searchinput = document.getElementById("search") //Je pose un ecouteur d'évènement sur ma bar de recherche
searchinput.addEventListener("input", ()=>{//Quand je tape dans ma recherche
    appel() //J'applique ma fonction appel
})

let selecteurtri = document.getElementById("tri")//Je pose un ecouteur d'évènement sur mon sélecteur de methode de tri
selecteurtri.addEventListener("change", ()=>{//Quand je change ma selection
    appel()     //J'applique ma fonction appel
})

/**
 * Rôle : Quand je clique sur une carte produit m'emmène sur la page détail.html
 * @returns Rien
 */
function changePage(){
    let cartes = document.querySelectorAll(".produit-card") // Je vais chercher toutes mes cartes

    cartes.forEach(carte => { // Pour chaque carte produit
        carte.addEventListener("click", ()=>{//Quand je clique dessus
            document.location.href = "./detail.html" //Je vais sur la page detail.html
        })
    });
}
/**
 * Rôle: applique une animation d'apparition lorsque une carte produit est contenu dans l'écran pendant que l'utilisateur scroll
 * @returns rien
 */
function scrollTrig() {
    let cartes = document.querySelectorAll(".produit-card") //Je vais chercher mes cartes produit
    let options = {
        treshold: [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]//un tableau de nombre indiquant à quel pourcentage de la visibilité d'une carte la fonction "apparait" de la carte doit être exécuté.
    }
    let ecran = new IntersectionObserver(apparait, options)//Je crée un observateur d'intersection en lui donnant en paramètres une fonction et le tableau déclaré précédement. Chaque fois qu'un palier de mon tableau sera franchi alors la fonction s'executera.
    
    cartes.forEach(carte => {//Pour chaque carte
        ecran.observe(carte)//L'observateur observe la carte
    })
    function apparait (entrees) { //une fonction qui prend en paramêtre les entrées quand l'observateur observe une carte
        entrees.forEach((entree) => {//pour chaque entrée 
            if(entree.isIntersecting){//quand mon entrée rentre dans mon écran
                entree.target.style.opacity = 1//Elle devient visible
            }else{//sinon
                entree.target.style.opacity = 0//elle devient invisible
            }
        })
    }
}
