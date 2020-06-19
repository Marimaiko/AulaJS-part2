function minhaFuncao()
{
    let numero1 = document.getElementById('input1');
    let numeroValue = numero1.value;
    // numeroValue=parseInt(numeroValue)
    numeroValue=Number(numeroValue);

    alert('Meu numero 1 é '+typeof numeroValue);

    let resultado =document.getElementById('resultado');
    resultado.innerHTML='Opa, funcionou';
}