function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('namePartial', document.getElementById("partial-template").innerHTML)
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
