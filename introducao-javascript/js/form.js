

var botaoAdicionar = document.querySelector('#adicionar-paciente');
var form = document.querySelector("#form-adiciona");
var tabela = document.querySelector("#tabela-pacientes");

var nome = form.nome.value;
var peso = form.peso.value;
var altura = form.altura.value;
var gordura = form.gordura.value;

botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    console.log('fui clicado, fela da puta!');
    criarTabela();
    
});

function criarTabela(){
    
    var tr = document.createElement('tr');
    var paciente = {
        nome: tr.appendChild(document.createElement('td')),
        peso: tr.appendChild(document.createElement('td')),
        altura: tr.appendChild(document.createElement('td')),
        gordura: tr.appendChild(document.createElement('td'))
    }

    paciente.nome.textContent = nome;
    paciente.peso.textContent = peso;
    paciente.altura.textContent = altura;
    paciente.gordura.textContent = gordura;

    tabela.appendChild(tr);
}