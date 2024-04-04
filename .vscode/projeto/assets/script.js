function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if(html.classList.contains("light")) {
  //html.classList.remove("light")
  //}
  //else{
  //html.classList.add("light")
  //}
  // A maracaçao a acima é caso voce queira criar a function do zero, porem ja existe a mesma funçao ja criada no javascript: chamada (TOGGLE) que nos criamos no html, na tag do (#switch) e usaremos essa function abaixo//

// Para fazer a troca da imagem do avatar(img) pelo javascript.

const img = document.querySelector("#profile img")
// usaremos a sintaxe abaixo.
// se estiver o modo light. adicinar a imagem light
//
// no exemplo acima eu selecionei onde a imagem esta localizada no documento css
if (html.classList.contains("light")) {
  img.setAttribute("src", "./avatar-light.png")
} else {
  img.setAttribute("src", "./tinywow_profile_photo_51512929.png")
}
// sempre verificar se as chaves {} estao corretas
}
