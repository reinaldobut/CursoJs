export class Cliente{
    nome;
    _cpf;
    rg;

    get cpf(){
        this._cpf;
    }
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}
