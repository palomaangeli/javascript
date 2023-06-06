function Casa (cor, terreno, bairro, preço){
    this.cor = cor;
    this.terreno = terreno;  
    this.bairro = bairro;
    this.preço = preço;
}


casa = new Casa ('branca', '30m²', 'alphavile', 'R$300.000.000');
console.log (casa);
