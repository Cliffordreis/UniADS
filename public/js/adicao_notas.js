function validarInput(input) {
    // Impedir caracteres inválidos
    input.value = input.value.replace(/[^0-9,.]/g, ''); // Permitindo números, ponto e vírgula
    input.value = input.value.replace(/,/g, '.'); // Substituindo vírgulas por pontos
}