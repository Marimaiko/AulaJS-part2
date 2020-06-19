 
let nome ;
let idade ;
let peso;
let sexo ;
let caloria
let opcao ;

function minhaFuncao()
{    
    nome=document.getElementById('innome').value;
    nome=new String(nome);

    idade=document.getElementById('inidade').value;
    idade=parseFloat(idade);

    peso=document.getElementById('inpeso').value;
    peso=Number(peso);

    sexo=document.getElementById('insexo').value;
    sexo=Number(sexo);

if (sexo === 1) 
    {
    if (idade >= 10 && idade <=18)
    {
        TMB = 17.5 * peso + 651;
        let resultado =document.getElementById('resultado');
        resultado.innerHTML=(nome+" sua taxa metabólica basal é de:"+TMB);
    }

    else if (idade >= 19 && idade <=30)
    {
        TMB = 15.3 * peso + 679;
        let resultado =document.getElementById('resultado');
        resultado.innerHTML=(nome+" sua taxa metabólica basal é de:"+TMB);
    }

    else if (idade >= 31 && idade <=60)
    {
        TMB = 8.7 * peso + 879;
        let resultado =document.getElementById('resultado');
        resultado.innerHTML=(nome+" sua taxa metabólica basal é de:"+TMB);    
    }

    else if (idade >60)
    {
        TMB = 13.5 * peso + 487;
        let resultado =document.getElementById('resultado');
        resultado.innerHTML=(nome+" sua taxa metabólica basal é de:"+TMB);    
    }

    else if(idade<10)
    {
        let resultado =document.getElementById('resultado');
        resultado.innerHTML=(nome+", Você ainda é muito novo pra isso");    
    }
}

if (sexo===2)
{
    if (idade >= 10 && idade <=18)
    {
        TMB = 12.2 * peso + 746;
        let resultado =document.getElementById('resultado');
        resultado.innerHTML=(nome+" sua taxa metabólica basal é de:"+TMB);    
    }

    else if (idade >= 19 && idade <=30)
    {
        TMB = 14.7 * peso + 496;
        let resultado =document.getElementById('resultado');
        resultado.innerHTML=(nome+" sua taxa metabólica basal é de:"+TMB);    
    }

    else if (idade >= 31 && idade <=60)
    {
        TMB = 8.7 * peso + 829;
        let resultado =document.getElementById('resultado');
        resultado.innerHTML=(nome+" sua taxa metabólica basal é de:"+TMB);    
    }

    else if (idade >60)
    {
        TMB = 10.5 * peso + 596;
        let resultado =document.getElementById('resultado');
        resultado.innerHTML=(nome+" sua taxa metabólica basal é de:"+TMB);    
    }

    else if(idade<10)
    {
        let resultado =document.getElementById('resultado');
        resultado.innerHTML=(nome+", Você ainda é muito nova pra isso"); 
    }
}

opcao=document.getElementById('in-opcao').value;
opcao=Number(opcao);

if(sexo===1)
{
if(opcao===1)
{
    caloria=TMB*1.2;
    let textoFinal =document.getElementById('resultadoCal');
    textoFinal.innerHTML=('e seu organismo necessita de '+ caloria+' calorias diariamente');
}
else if(opcao===2)
{
    caloria=TMB*1.4;
    let resultadoCal =document.getElementById('resultadoCal');
    resultadoCal.innerHTML=('e seu organismo necessita de '+ caloria+' calorias diariamente');
}
else if(opcao===3)
{
    caloria=TMB*1.5;
    let resultadoCal =document.getElementById('resultadoCal');
    resultadoCal.innerHTML=('e seu organismo necessita de '+ caloria+' calorias diariamente');
}
else if(opcao===4)
{
    caloria=TMB*1.6;
    let resultadoCal =document.getElementById('resultadoCal');
    resultadoCal.innerHTML=('e seu organismo necessita de '+ caloria+' calorias diariamente');
}
else if(opcao===5)
{
    caloria=TMB*1.8;
    let resultadoCal =document.getElementById('resultadoCal');
    resultadoCal.innerHTML=('e seu organismo necessita de '+ caloria+' calorias diariamente');
}
else 
{
    let resultadoCal =document.getElementById('resultadoCal');
    resultadoCal.innerHTML=('Opção inválida');
}
}

if (sexo===2)
{
if (opcao===1)
{
    caloria = TMB *1.2;
    let resultadoCal =document.getElementById('resultadoCal');
    resultadoCal.innerHTML=('e seu organismo necessita de '+ caloria+' calorias diariamente');
}
else if(opcao===2)
{
    caloria=TMB*1.3;
    let resultadoCal =document.getElementById('resultadoCal');
    resultadoCal.innerHTML=('e seu organismo necessita de '+ caloria+' calorias diariamente');
}
else if(opcao===3)
{
    caloria=TMB*1.45;
    let resultadoCal =document.getElementById('resultadoCal');
    resultadoCal.innerHTML=('e seu organismo necessita de '+ caloria+' calorias diariamente');
}
else if(opcao===4)
{
    caloria=TMB*1.5;
    let resultadoCal =document.getElementById('resultadoCal');
    resultadoCal.innerHTML=('e seu organismo necessita de '+ caloria+' calorias diariamente');
}
else if(opcao===5)
{
    caloria=TMB*1.7
    let resultadoCal =document.getElementById('resultadoCal');
    resultadoCal.innerHTML=('e seu organismo necessita de '+ caloria+' calorias diariamente');
}
else 
{
    let resultadoCal =document.getElementById('resultado');
    resultadoCal.innerHTML=('Opção inválida');
}
}


} //function




