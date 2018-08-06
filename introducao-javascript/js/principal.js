
let titulo = document.querySelector('.titulo');
titulo.textContent = "Ted Nutricionista";

let pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(paciente => {

    let peso = paciente.querySelector('.info-peso').textContent;
    let altura = paciente.querySelector('.info-altura').textContent;
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    let tdImc = paciente.querySelector('.info-imc');
    
    if(peso <= 0 || peso >= 1000) {
        console.log('Peso invalido');
        pesoEhValido = false;
        tdImc.textContent = 'Peso inválido!';
        paciente.classList.add("paciente-invalido");
    
    }
    
    if(altura <= 0 || altura > 3.00){
        console.log('Altura invalida');
        alturaEhValida = false;
        tdImc.textContent = 'Altura inválida!';
        paciente.classList.add("paciente-invalido");
    }
    
    if(pesoEhValido && alturaEhValida){
        let imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
    if(!pesoEhValido && !alturaEhValida){
        tdImc.textContent = 'Altura e peso inválidos';
        paciente.classList.add("paciente-invalido");
    };
    
});


