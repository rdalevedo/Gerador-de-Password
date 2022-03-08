let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

/* Quais caracteres devem ser utilizados para geração da senha */
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*(";
let novaSenha = "";

/* Passando o retorno do que o usuário selecionar para qtde de caracteres desejado*/
sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function()
{
    sizePassword.innerHTML = this.value;
}

/* Funação para gerar a senha*/

function generatePassword()
{
    let pass = "";
    
    /* o "i" inicia em zero e ele deve continuar passando dentro do for até que o "i" seja menor que o "sliderElement.value"(qtde de caracteres que o usuário selecionou anteriormente)*/
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i)
    {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

/* Copiar a senha quando já clicar na senha gerada */
function copyPassword()
{
    alert("Senha copiada!")
    navigator.clipboard.writeText(novaSenha);
}