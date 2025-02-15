class Atleta {
    constructor(nome, idade, peso, altura, notas){  //classe Atleta conforme solicitado
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
//Métodos
calculaCategoria(){
if (this.idade <= 30 && this.idade >= 9) {   //o primeiro IF identifica a idades 
    if(this.idade <= 11){                    //validas para concorrer
        return "Categoria Infantil";        //Subsequentes, so "podam" para cada categoria
    } else {
        if (this.idade <= 13){
            return "Categoria Juvenil";
        } else {
            if(this.idade <= 15){
                return "Categoria Intermediário";
            } else {
                    return "Categoria Adulto";
                }
            }
        }
    } else {
        if (this.idade < 9) {
            return "Entrada inválida";  //Diferencia um erro de idade (menores
        } return "Sem categoria";        //que 9, incluso negativos) de acima de 30.
    }
}

calculaIMC() {
    this.imc = (this.peso / (this.altura * this.altura));
    return this.imc;                                        //retorna o imc
}

calculaMediaValida() {                                      //Média de notas, recebe a matriz de notas (aproveitada do ultimo desagio DevStart)
        let notasValidas = 0;
        this.notas.sort((a, b) => a - b);
        for (let i = 0; i < this.notas.length; i++){        //executa o comando enquanto i for menor que o tamanho do array
        if ((i !== 0) && (i !== (this.notas.length - 1))){
        notasValidas = notasValidas + this.notas[i];        //elimina a maior e a menor nota (primeira e a última do array)
        }                                              //e soma os demais em uma variável
        }
        this.media = 0
        this.media = (notasValidas/(this.notas.length-2));   //retorna o valor da média das notas somadas sobre o número de notas somadas
        return this.media;
}

obtemNomeAtleta() {
    return this.nome;
}

obtemIdadeAtleta() {
    return this.idade;
}

obtemPesoAtleta() {
    return this.peso;
}

obtemNotasAtleta() {
    return this.notas;
}

obtemCategoria() {
    return this.calculaCategoria();
}

obtemIMC() {
    return this.calculaIMC();                //não estava conseguindo referenciar a função instancial calculaIMC(), calculaMediaValida() e 
                                              //calculaCategoria() sem ter que repetir a pro-
                                              //pria função dentro do código causando redundância. Após pesquisa consegui referenciar usando o this.
}

obtemMediaValida() {
    return this.calculaMediaValida();
}}
//testando e exibindo:
const atleta = new Atleta("César Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());
