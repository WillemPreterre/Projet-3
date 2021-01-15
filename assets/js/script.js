 
// Récupérer l'article via le bouton d'accueil        

//Récupérer l'information depuis le stockage
var panierPage  = JSON.parse(sessionStorage.getItem("panierStorage"));
   if (panierPage != null){
       sessionStorage.setItem("panierStorage", JSON.stringify(panierPage));  
   } else {
     panierPage = [];
   }
   //récupère le bouton
    var clickedPanier = document.getElementsByClassName('buttonPlus')
    console.log(clickedPanier)
        document.addEventListener('click', function(event) {
            console.log(panierPage)
            var addButtonClicked = event.target.parentNode.parentNode
            panierPage.push(addButtonClicked)
            console.log(panierPage)
        })

        //Permet de tranferer vers le storage
        sessionStorage.setItem("PanierStorage", JSON.stringify(panierPage));

 //Enlever un élément du panier
 //récupère le bouton moins
var removePanier = document.getElementsByClassName('all-buttonArticle')
//boucle pour récupérer tous les éléments "moins" 
for (var i = 0; i < removePanier.length; i++) {
    var buttonRemove = removePanier[i]
    buttonRemove.addEventListener('click', function(event) {
        var removeButtonClicked = event.target.parentNode.parentNode.remove()
        //target pour récuperer l'élément qui a déclanché un événement spécifique 
        //ParentNode pour récuperer le parent du parent pour supprimer l'article
    })
}

//session LocalStorage permet de sauvegarder ce que l'on veut pour le réutiliser plus tard


 //Récupérer l'article via le bouton de la page détail
   var addPanierDetail = document.getElementsByClassName('panier-button')
   for (var i = 0; i < addPanierDetail.length; i++) {
       var buttonAddDetail = addPanierDetail[i]
       buttonAddDetail.addEventListener('click', function(event)  {
           console.log(buttonAddDetail)
       })
   }




   //rajouter bouton + a la place de dispo market