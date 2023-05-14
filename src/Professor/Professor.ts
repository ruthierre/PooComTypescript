import { Endereco } from "../Endereco/Endereco";
import { Pessoa } from "../Pessoa/Pessoa";
import { Projeto } from "../Projeto/Projeto";


class Professor  extends Pessoa implements Projeto {
   
    private _salario: number;

    constructor(

        nome: string,
        sobrenome: string,
        idade: number,
        brasileiro: boolean,
        sexo: string,
        CPF: string,
        enderecos: Endereco[],
        salario: number
        ) {
        
        super(nome,sobrenome,idade, brasileiro,enderecos ,sexo, CPF);
        this._salario = salario;
        this.matricula = this.gerarMatricula();
        }

    public get salario(): number{
        return this._salario;
    }
    public set salario(value:number){
        this._salario;
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