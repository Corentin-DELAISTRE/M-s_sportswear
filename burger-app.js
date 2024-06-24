let burger = document.getElementById("burger")
let nav = document.querySelector(".burger-nav")

burger.addEventListener("click",()=>{
    if(nav.classList.contains("open") === false){
        nav.classList.add("open")
        burger.innerHTML = `<img class="responsive-img" src="./assets/imagesSIte/close-cross.png" alt="Icone pour fermer le menu depliant">`
    }else{
        nav.classList.remove("open")
        burger.innerHTML = `<img class="responsive-img" src="./assets/imagesSIte/burger-bar.png" alt="Icone pour ouvrir le menu depliant">`
    }
})