import { Pessoa } from "./Pessoa";
import { Projeto } from "./Projeto";

class Professor  extends Pessoa implements Projeto , Endereco {
   
    salario: number;

    constructor(

        nome: string,
        sobrenome: string,
        idade: number,
        brasileiro: boolean,
        sexo: string,
        CPF: string,
        enderecos: string[],
        salario: number){
        
        super(nome,sobrenome,idade, brasileiro,enderecos,sexo, CPF);
        this.salario = salario;
        this.matricula = this.gerarMatricula();
    }
    exibirEndereco(): void {
       console.log('endereço do professor');
    }

    gerarMatricula(): number {
        return Math.floor(Math.random() * (99999999 - 10000000) + 10000000);
    }

    submeterProjetoPesquisa(): void {
        console.log('código relacionado a pesquisa de Professor');
     }
 
    submeterProjetoExtensao(): void {
        console.log('código relacionado a extensao de Professor');
    }
}

export {Professor};