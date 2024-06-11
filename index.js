var numero = ""; 
var i = 1;
const tres = 3;

var aleatorio = Math.floor(Math.random() * 201);

console.log("Vamos adivinhar números de 0 a 10!");
console.log("Você tem 3 tentativas, digite o número aqui:");

process.stdin.on("data", function (data) {    
    if (data.toString().trim().toLowerCase() == "não") {
        console.log("Até mais!");
        process.exit();
    }
    else if (data.toString().trim().toLowerCase() == "sim") {
        i = 1;
        numero = "";
        aleatorio = Math.floor(Math.random() * 201);
        console.log("Digite o número:")
    } 
    else {
    numero = data.toString().trim();
    if (i == 3 && numero != aleatorio) {
        console.log("Você atingiu o limite de tentativas...")
        console.log("O número era: " + aleatorio)
        console.log("Deseja jogar novamente?")
    }
    else {

        if (numero == aleatorio) {
            console.log ("Acertou!! :)");
            console.log("Deseja jogar novamente?");
        }
        else if (Math.abs(numero - aleatorio) < 200 * 0.3){
           console.log("QUENTE!! Você está próximo! Você ainda tem " + (tres-i) + " tentativas.");
           i++;
        }
        else {
            console.log("FRIO!! Você está longe.. Você ainda tem " + (tres-i) + " tentativas.");
            i++;
        }
    }
    }
});