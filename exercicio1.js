// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

//Botão Calcular
let botaoCalcular = document.querySelector('#calcular');

//Quando eu clicar no botão calcular
botaoCalcular.addEventListener('click', function(){
    let G = document.querySelector('#constante').value; //Lendo o valor de G
    let M1 = document.querySelector('#massa1').value;   //Lendo o valor de M1
    let M2 = document.querySelector('#massa2').value;   //Lendo o valor de M2
    let d = document.querySelector('#distancia').value; //Lendo o valor de d

    let F = (G*M1*M2)/(d**2);   //Calculando o valor da força 

    //Atribuinto o valor calculado ao campo #resultado
    let resultado = document.querySelector('#resultado');
    resultado.value = F;
});