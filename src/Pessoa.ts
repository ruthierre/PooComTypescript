abstract class Pessoa{

    matricula: number = 0;
    sexo: string;
    CPF: string ;
    nome: string;
    sobrenome: string;
    idade: number;
    brasileiro:boolean;
    enderecos:string[];
    static quantidadePessoas: number = 0;


    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        brasileiro: boolean,
        enderecos: string[],
        sexo: string,
        CPF: string)
    {

        this.sexo = sexo;
        this.CPF = CPF;
        this.nome = nome;
        this.sobrenome =sobrenome;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.enderecos = enderecos;
        Pessoa.quantidadePessoas += Pessoa.quantidadePessoas;
    }

    exibirNomeCompleto() : string {
        return( `O nome completo é: ${this.nome} ${this.sobrenome}`);
    }

    recuperarEndereco(posicao: number) : string {
        return this.enderecos[posicao];
    }

    static recuperarQuantidadePessoas(): number {
        return Pessoa.quantidadePessoas;
    }

    abstract gerarMatricula() : number ;
    
}
export {Pessoa}