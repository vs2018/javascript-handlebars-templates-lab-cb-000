function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("partial-template").innerHTML)
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
