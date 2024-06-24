//AFFICHAGE DE LA CARTE DANS LE FOOTER 

/**
 * Rôle: affiche la carte au niveau de Saint-etienne avec un marqueur indiquant le magasin de M'S
 * Pas de paramètres ni de retours
*/
function afficheLacarte(){
    
    //Je récupère la carte sur openstreetmap en precisant les coordonnées voulues et je l'affiche dans ma div qui a l'id "map"
    let map = L.map('map').setView([45.439695, 4.3871779],13)
    //Ajout des contributeurs sur ma la fenêtre de la map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    //Je déclare une variable pour mon map pin
    var myIcon = L.icon({
        //Chemin et propriétés du map pin
        iconUrl: './assets/imagesSIte/map-pin.png',
        iconSize: [30, 50],
        iconAnchor: [22, 94],
        popupAnchor: [-8, -90],
    });

    //Je place mon marqueur sur les coordonnées voulues avec son pop up
    L.marker([45.439695, 4.3871779],{icon: myIcon}).addTo(map)
        .bindPopup(`<h4>M'S Shop<br>1 place de l'hôtel de ville 42 000 Saint-Etienne</h4>`)
        .openPopup();   
}
//J'appelle ma fonction
afficheLacarte()
