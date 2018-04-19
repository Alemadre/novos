let vetorVogais = ['A', 'E', 'I', 'O', 'U'];
let vetorConsoantes = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V','X', 'W','Y', 'Z'];

let entrada = document.querySelector("input");
let botao = document.querySelector("button");

entrada.charAt(0);
for( let vetorVogais of vetorConsoantes) {
    console.log("")

}



//Objeto
var obj = {a:1, b:2, c:3};

//Para prop (propriedade) in obj (objeto) faça
for (var prop in obj) {
  // ctrl+shift+k (para abrir o console no mozilla firefox)
  console.log("obj." + prop + " = " + obj[prop]);
}

//A saída (output) deverá ser:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"