var jsFile = document.createElement("script");
jsFile.src = "script2.js";
console.log(jsFile);
document.head.appendChild(jsFile);

window.onload = function () {
  alert(diff(3, 4));
}