import { Pessoa } from "./Pessoa";
import { Projeto } from "./Projeto";

class Aluno extends Pessoa implements Projeto , Endereco {
   
  
    curso: string;
    situacao: SituacaoAluno;

    constructor(
        sexo: string,
        CPF: string,
        nome: string,
        sobrenome: string,
        idade: number,
        brasileiro: boolean,
        enderecos: string[],
        curso: string,
        situacao: SituacaoAluno){
        
        super(nome, sobrenome, idade, brasileiro, enderecos,sexo,CPF); 
        this.curso = curso;
        this.situacao = situacao;
        this.matricula = this.gerarMatricula();
    }
    submeterProjetoPesquisa(): void {
        throw new Error("Method not implemented.");
    }
    submeterProjetoExtensao(): void {
        throw new Error("Method not implemented.");
    }
    exibirEndereco(): void {
        // rua = 'rua Z';
        // bairro = 'centro';
        // cep = '49300-000';
        // numero = '000'
        console.log('endereco do aluno');
    }

    gerarMatricula(): number {
        throw new Error("Method not implemented.");
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