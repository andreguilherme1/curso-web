// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras

function verificaCaracteres(string1, string2) {
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();

    for (let i = 0; i < string1.length; i++) {
        if (string2.indexOf(string1[i]) === -1) {
            return false;
        }
    }

    for (let i = 0; i < string2.length; i++) {
        if (string1.indexOf(string2[i]) === -1) {
            return false;
        }
    }

    return true;
}

console.log(verificaCaracteres("boi", "oiB"))
console.log(verificaCaracteres("vaca", "acvb"))