const escreventes = [
  {
    id: 1,
    name: 'Elizabeth Cristina Andrade Sousa',
    phone: '(21) 99491-9695',
    email: 'elizabethandradesousa@gmail.com',
  },
  {
    id: 2,
    name: 'Iara Marcelino Santos',
    phone: '(21) 96416-6887',
    email: 'iaracall97@gmail.com',
  },
  {
    id: 3,
    name: 'Luiz Claudio Batista de Almeida',
    phone: '(21) 99723-6528',
    email: 'luizclaudioba.dinho@gmail.com',
  },
  {
    id: 4,
    name: 'Letícia Nóbrega Vieira',
    phone: '(21) 97242-5005',
    email: 'leticia9oficio@gmail.com',
  },
  {
    id: 5,
    name: 'Marystela Suzana de Oliveira',
    phone: '(21) 99935-3526',
    email: 'my9oficio@gmail.com',
  },
  {
    id: 6,
    name: 'Paula de Abreu Cunha',
    phone: '(21) 97964-7556',
    email: 'paulaabreu_cunha@hotmail.com',
  },
  {
    id: 7,
    name: 'Paulo Cezar Rezende da Cunha',
    phone: '(21) 99184-1652',
    email: 'pc9oficio@hotmail.com',
  },
  {
    id: 8,
    name: 'Rosângela Nascimento dos Santos',
    phone: '(21) 99600-6940',
    email: 'sontiero01@gmail.com',
  },
  {
    id: 9,
    name: 'Valéria Santos Melo',
    phone: '(21) 97008-5827',
    email: 'vallmello_@hotmail.com',
  },
];

const select = document.getElementById('escreventeSelect');
const details = document.getElementById('escreventeDetails');
const phone = document.getElementById('escreventeTelefone');
const email = document.getElementById('escreventeEmail');

window.onload = function () {
  details.style.display = 'none';
  escreventes.forEach(escrevente => {
    const option = document.createElement('option');
    option.value = escrevente.name;
    option.innerHTML = escrevente.name;
    select.appendChild(option);
  });
  select.addEventListener('change', (event) => {
    const escrevente = escreventes.find(esc => esc.name === event.target.value);
    if (escrevente) {
      phone.innerHTML = '<b>Telefone: </b>' + escrevente.phone;
      email.innerHTML = '<b>Email: </b>' + escrevente.email;
      details.style.display = 'inline';
    } else {
      details.style.display = 'none';
    }
  })
}