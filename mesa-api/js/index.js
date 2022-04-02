// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
apiResult();

function apiResult (){
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            //manipulamos a resposta
            return data.results;
        })
        .then(data =>{
            return data[0];
        })
        .then(data =>{
            renderizarDadosUsuario(data);
        });
}

// Criação do elemento que vai comportar os dados recebidos pela API:
let div = document.createElement('div');

// Função que renderiza os dados da API em tela:
function renderizarDadosUsuario(dados) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.

    //Seleção do card:
    let card = document.querySelector('.card');
    
    //População da div criada com os dados recebidos pela API:
    div.innerHTML = `
        <img src="${dados.picture.large}">
        <h2>${dados.name.first} ${dados.name.last}</h2>
        <p>${dados.email}</p>
    `
    //Estilização do card
    div.style.textAlign = 'center'
    div.style.padding = '20px'

    //Renderização em tela:
    card.appendChild(div);
}



/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.

//Captura do elemento button e atribuição à variável btn:
let btn = document.getElementById('random');

//Evento que chama a função apiGet sendo disparado ao clique do botão:
btn.addEventListener('click', (event)=>{
    event.preventDefault();
    apiResult();
})


