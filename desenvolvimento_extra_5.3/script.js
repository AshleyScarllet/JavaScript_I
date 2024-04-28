let elementoH1 = document.querySelector("#titulo");
elementoH1.innerText = "Compre Aqui";

let produto = document.createElement("h3");
let nome = document.createTextNode("Notebook Dell Inspiron 15 3530");
produto.appendChild(nome);
document.body.appendChild(produto);

let preco = document.createElement("p");
let valor = document.createTextNode("R$ 2.600,00");
preco.appendChild(valor);
document.body.appendChild(preco);

let descricao = document.createElement("p");
let texto = `
Cor: Carbon Black - Preto Carbono<br>
Tela: Full HD de 15.6" (1920 x 1080), 120 Hz, WVA<br>
Processador: 13ª geração Intel® Core™ i5-1334U (10-core, cache de 12MB, até 4.60GHz)<br>
Placa de vídeo: Intel® Iris® Xe com memória gráfica compartilhada<br>
Memória RAM: 16GB DDR4 (2x8GB) 2666MT/s; Expansível até 16GB (2 slots soDIMM)<br>
Armazenamento: SSD de 512GB PCIe NVMe M.2
`;
let informacao = document.createTextNode(texto);
descricao.innerHTML = texto;
document.body.appendChild(descricao);
