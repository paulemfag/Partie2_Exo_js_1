
// Sélectionne l'élement a partir de son id
var picture = document.getElementById('image1');
// Quand la souris est sur l'element
picture.onmouseover = function() {
  picture.src='assets/images/image1_2.jpg';
}
// Quand la souris n'est plus sur l'element
picture.onmouseout = function() {
  picture.src='assets/images/image1.jpg';
}
