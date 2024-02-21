



//----------------------------------------upload prescription------------------------------------------
const placeholderTexts = [
  "Search for products",
  "Search for services",
  "Search for information",
];
let currentIndex = 0;

function changePlaceholderText() {
  document.getElementById("searchInput")
    .setAttribute("placeholder", placeholderTexts[currentIndex]);
  currentIndex = (currentIndex + 1) % placeholderTexts.length;
}

setInterval(changePlaceholderText, 2000);






































// for hide code 
// for hide code
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
 }, false);

 document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.keyCode==123) {
   e.stopPropagation();
   e.preventDefault();
  }
 });