let elementoH1 = document.querySelector("#titulo");
elementoH1.innerText = "Titulo";

let elementoA = document.getElementsByTagName("a");
elementoA[0].innerText = "Proz";

let elementoUl = document.getElementsByTagName("ul");
elementoUl[0].innerHTML = `
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>`;

let elementoOl = document.querySelector("#lista-ordenada");
elementoOl.innerHTML = `
<li><a href="https://www.youtube.com/?hl=pt&gl=BR">Youtube</a></li>
<li><a href="https://www.instagram.com/">Instagram</a></li>
<li><a href="https://www.facebook.com/?locale=pt_BR">Facebook</a></li>`;