let mainEscritura = document.getElementById("main-escritura");
let mainInventario = document.getElementById("main-inventario");
let mainDivorcio = document.getElementById("main-divorcio");
let mainUsucapiao = document.getElementById("main-usucapiao");
let mainAta = document.getElementById("main-ata");
let mainProcuracao = document.getElementById("main-procuracao");
let mainCertidao = document.getElementById("main-certidao");

let imgsTags = document.getElementsByClassName("serv-img");

let imgsBrancas = ['./img/contract1.svg', './img/contract2.svg', './img/contract3.svg', './img/contract4.svg', './img/contract5.svg', './img/contract6.svg', './img/contract7.svg'];
let imgsAzuis = ['./img/contract1-azul.svg', './img/contract2azul.svg', './img/contract3-azul.svg', './img/contract4-azul.svg', './img/contract5-azul.svg', './img/contract6-azul.svg', './img/contract7-azul.svg'];

// CLICK
mainEscritura.addEventListener('click', () => { location.href = '../servicos/escrituras.html' });
mainInventario.addEventListener('click', () => { location.href = '../servicos/inventarios.html' });
mainDivorcio.addEventListener('click', () => { location.href = '../servicos/divorcios.html' });
mainUsucapiao.addEventListener('click', () => { location.href = '../servicos/usucapiao.html' });
mainAta.addEventListener('click', () => { location.href = '../servicos/atas.html' });
mainProcuracao.addEventListener('click', () => { location.href = '../servicos/procuracoes.html' });
mainCertidao.addEventListener('click', () => { location.href = '../servicos/certidoes.html' });
// HOVER
mainEscritura.addEventListener('mouseover', () => { imgsTags[0].src = imgsAzuis[5] });
mainInventario.addEventListener('mouseover', () => { imgsTags[1].src = imgsAzuis[3] });
mainDivorcio.addEventListener('mouseover', () => { imgsTags[2].src = imgsAzuis[4] });
mainUsucapiao.addEventListener('mouseover', () => { imgsTags[3].src = imgsAzuis[2] });
mainAta.addEventListener('mouseover', () => { imgsTags[4].src = imgsAzuis[0] });
mainProcuracao.addEventListener('mouseover', () => { imgsTags[5].src = imgsAzuis[6] });
mainCertidao.addEventListener('mouseover', () => { imgsTags[6].src = imgsAzuis[1] });
// OUT
mainEscritura.addEventListener('mouseout', () => { imgsTags[0].src = imgsBrancas[5] });
mainInventario.addEventListener('mouseout', () => { imgsTags[1].src = imgsBrancas[3] });
mainDivorcio.addEventListener('mouseout', () => { imgsTags[2].src = imgsBrancas[4] });
mainUsucapiao.addEventListener('mouseout', () => { imgsTags[3].src = imgsBrancas[2] });
mainAta.addEventListener('mouseout', () => { imgsTags[4].src = imgsBrancas[0] });
mainProcuracao.addEventListener('mouseout', () => { imgsTags[5].src = imgsBrancas[6] });
mainCertidao.addEventListener('mouseout', () => { imgsTags[6].src = imgsBrancas[1] });