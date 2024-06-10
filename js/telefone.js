/*function mascaraCelular(v){
    var telCelular = v.value

    //Removendo os caracteres não numéricos e limitando a 11 dígitos.
    v.value = v.value.replace(/\D/g, '').substring(0,13)
    //5521994014823
    
    var pais = v.value.slice(0,2)
    var ddd = v.value.slice(2,4)
    var parte1 = v.value.slice(4,9)
    var parte2 = v.value.slice(9,13)

    if (telCelular.length == 13){
        var numeroFormatado = `(+${pais}) ${ddd} ${parte1}-${parte2}`
    }
    
    
    //Enviar para o campo o número formatado
    v.value = numeroFormatado
}

*/