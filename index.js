function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {

    return new Handlebars.SafeString(this.body)

})


function displayEditForm() {
  
}
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
