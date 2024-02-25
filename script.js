function calcular(tipo, valor){
    if(tipo == 'acao'){
        if(valor == 'c'){
            //LIMPAR O VISOR (ID RESULTADO)
            document.getElementById('resultado').value = '';
        }

        if(valor == '+' || valor == '-' || valor == '*' || valor == '/' || valor == '.'){
            document.getElementById('resultado').value += valor;
            //+= FAZENDO A CONCATENAÇÃO, PARA PODER EXIBIR JUNTO, SEM ZERAR O INPUT
        }

        if(valor == '='){
            var valor_campo = eval(document.getElementById('resultado').value); //valor_campo será igual a tudo que foi digitado
             //eval() = faz com que o valor de string se converta e já faça o calculo automaticamente

             document.getElementById('resultado').value = valor_campo; //resultado final sendo mostrado
        }
    }else{
        document.getElementById('resultado').value += valor;
        //+= FAZENDO A CONCATENAÇÃO, PARA PODER EXIBIR OUTROS NÚMEROS, SEM ZERAR O INPUT
    }
}