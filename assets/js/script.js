var removePanier = document.getElementsByClassName('all-buttonArticle')
for (var i = 0; i < removePanier.length; i++) {
    var buttonRemove = removePanier[i]
    buttonRemove.addEventListener('click', function(removeFunction) {
        var removeButtonClicked = removeFunction.target.parentNode.parentNode.remove()
        //target pour récuperer l'élément qui a déclanché un événement spécifique 
        //ParentNode pour récuperer le parent du parent pour supprimer l'article
    })
}
var addPanier = document.getElementsByClassName('buttonPlus')
for (var i = 0; i < addPanier.length; i++) {
    var buttonAdd = addPanier[i]
    buttonAdd.addEventListener('click', function(addFunction)  {
        console.log(buttonAdd)
    })
}

var addPanierDetail = document.getElementsByClassName('panier-button')
for (var i = 0; i < addPanierDetail.length; i++) {
    var buttonAddDetail = addPanierDetail[i]
    buttonAddDetail.addEventListener('click', function(addFunction)  {
        console.log(buttonAddDetail)
    })
}