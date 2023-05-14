import { Pessoa } from "../Pessoa/Pessoa";
import { Projeto } from "../Projeto/Projeto";
import { Endereco } from "../Endereco/Endereco";

class Aluno extends Pessoa implements Projeto {
   
  
    private _curso: string;
    protected situacao: SituacaoAluno;

    constructor(
        sexo: string,
        CPF: string,
        nome: string,
        sobrenome: string,
        idade: number,
        brasileiro: boolean,
        enderecos: Endereco[],
        curso: string,
        situacao: SituacaoAluno){
        
        super(nome, sobrenome, idade, brasileiro, enderecos,sexo,CPF); 
        this._curso = curso;
        this.situacao = situacao;
        this.matricula = this.gerarMatricula();
    }

    public get curso(): string {
        return this._curso;
    }
    public set curso(value: string) {
        this._curso = value;
    }
    
    submeterProjetoPesquisa(): void {
       console.log('projeto pesquisa de Aluno');
    }
    submeterProjetoExtensao(): void {
        console.log('projeto Extensão de Aluno');
    }
    exibirEndereco(): void {
        console.log('exibir endereco do aluno');
    }

    gerarMatricula(): number {
        let data: number = new Date().getFullYear();
        let numero: number = Math.floor(Math.random() * (9999 - 1000 + 1 ) + 1000);
        return Number(`${data}${numero}`);
    }
}
    enum SituacaoAluno {
        CONCLUIDO = 'Concluido',
        TRANCADO  = 'Trancado',
        MATRICULADO = 'Matriculado',
        ATIVO = 'Ativo',
        CANCELADO ='Cancelado',
    
    }

    export { Aluno , SituacaoAluno }