document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario_cad").addEventListener("submit", function(event) {
            // Pegando os valores
        var senha = document.getElementById("senha_cad").value;
        var confirmacaoSenha = document.getElementById("senha_conf").value;
        var email = document.getElementById("email_cad").value;
        var confirmacaoEmail = document.getElementById("email_conf").value;

            // Verificando se os emails são iguais
        if (email !== confirmacaoEmail) {
            alert("Os emails não coincidem.");
            event.preventDefault(); // Impede o envio do formulário
            return false;
        }

            // Verificando se as senhas são iguais
        if (senha !== confirmacaoSenha) {
            alert("As senhas não coincidem.");
            event.preventDefault(); // Impede o envio do formulário
            return false;
        }
    })
});

document.addEventListener("DOMContentLoaded", function() {
    var cpfInput = document.getElementById("cpf");

    cpfInput.addEventListener("input", function() {
        // Remove caracteres não numéricos do valor do campo
        var cpfValue = cpfInput.value.replace(/\D/g, "");
        
        // Formata o CPF (adiciona pontos e traço)
        var formattedCpf = cpfValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        
        // Atualiza o valor do campo com o CPF formatado
        cpfInput.value = formattedCpf;
    });
});
