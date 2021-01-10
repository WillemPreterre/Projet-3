// Enlever un élément du panier
var removePanier = document.getElementsByClassName('all-buttonArticle')
for (var i = 0; i < removePanier.length; i++) {
    var buttonRemove = removePanier[i]
    buttonRemove.addEventListener('click', function(event) {
        var removeButtonClicked = event.target.parentNode.parentNode.remove()
        //target pour récuperer l'élément qui a déclanché un événement spécifique 
        //ParentNode pour récuperer le parent du parent pour supprimer l'article
    })
}
// Récupérer l'article via le bouton d'accueil
var addPanier = document.getElementsByClassName('buttonPlus')
for (var i = 0; i < addPanier.length; i++) {
    var buttonAdd = addPanier[i]
    buttonAdd.addEventListener('click', function(event)  {
        console.log(buttonAdd)
        //var AddButtonClicked = event.target.parentNode.parentNode.remove()
        //let panierPage = document.querySelector('.articleOne')
        //let indexPage = document.getElementsByClassName('articleAll')
        //sessionStorage.Change = document.querySelector('.articleOne')
        //var change = sessionStorage.change//
        //console.log(change)
        //session storage permet de sauvegarder ce que l'on veut pour le réutiliser plus tard
    })
}
// Récupérer l'article via le bouton de la page détail
var addPanierDetail = document.getElementsByClassName('panier-button')
for (var i = 0; i < addPanierDetail.length; i++) {
    var buttonAddDetail = addPanierDetail[i]
    buttonAddDetail.addEventListener('click', function(addFunction)  {
        console.log(buttonAddDetail)
    })
}