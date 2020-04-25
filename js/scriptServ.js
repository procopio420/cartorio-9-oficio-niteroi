let servEscritura = document.getElementById("serv-escritura");
let servInventario = document.getElementById("serv-inventario");
let servDivorcio = document.getElementById("serv-divorcio");
let servUsucapiao = document.getElementById("serv-usucapiao");
let servAta = document.getElementById("serv-ata");
let servProcuracao = document.getElementById("serv-procuracao");
let servCertidao = document.getElementById("serv-certidao");

let imgsTags = document.getElementsByClassName("serv-img");

let imgsBrancas = ['./img/contract1.svg', './img/contract2.svg', './img/contract3.svg', './img/contract4.svg', './img/contract5.svg', './img/contract6.svg', './img/contract7.svg'];
let imgsAzuis = ['./img/contract1-azul.svg', './img/contract2azul.svg', './img/contract3-azul.svg', './img/contract4-azul.svg', './img/contract5-azul.svg', './img/contract6-azul.svg', './img/contract7-azul.svg'];

// CLICK
servEscritura.addEventListener('click', () => { location.href = '../servicos/escrituras.html' });
servInventario.addEventListener('click', () => { location.href = '../servicos/inventarios.html' });
servDivorcio.addEventListener('click', () => { location.href = '../servicos/divorcios.html' });
servUsucapiao.addEventListener('click', () => { location.href = '../servicos/usucapiao.html' });
servAta.addEventListener('click', () => { location.href = '../servicos/atas.html' });
servProcuracao.addEventListener('click', () => { location.href = '../servicos/procuracoes.html' });
servCertidao.addEventListener('click', () => { location.href = '../servicos/certidoes.html' });
// HOVER
servEscritura.addEventListener('mouseover', () => { imgsTags[0].src = imgsAzuis[5] });
servInventario.addEventListener('mouseover', () => { imgsTags[1].src = imgsAzuis[3] });
servDivorcio.addEventListener('mouseover', () => { imgsTags[2].src = imgsAzuis[4] });
servUsucapiao.addEventListener('mouseover', () => { imgsTags[3].src = imgsAzuis[2] });
servAta.addEventListener('mouseover', () => { imgsTags[4].src = imgsAzuis[0] });
servProcuracao.addEventListener('mouseover', () => { imgsTags[5].src = imgsAzuis[6] });
servCertidao.addEventListener('mouseover', () => { imgsTags[6].src = imgsAzuis[1] });
// OUT
servEscritura.addEventListener('mouseout', () => { imgsTags[0].src = imgsBrancas[5] });
servInventario.addEventListener('mouseout', () => { imgsTags[1].src = imgsBrancas[3] });
servDivorcio.addEventListener('mouseout', () => { imgsTags[2].src = imgsBrancas[4] });
servUsucapiao.addEventListener('mouseout', () => { imgsTags[3].src = imgsBrancas[2] });
servAta.addEventListener('mouseout', () => { imgsTags[4].src = imgsBrancas[0] });
servProcuracao.addEventListener('mouseout', () => { imgsTags[5].src = imgsBrancas[6] });
servCertidao.addEventListener('mouseout', () => { imgsTags[6].src = imgsBrancas[1] });