import { Pessoa } from "./Pessoa/Pessoa";
import { Aluno, SituacaoAluno } from "./Aluno/Aluno";
import { Professor } from "./Professor/Professor";
import { Endereco } from "./Endereco/Endereco";
import { Disciplina } from "./Disciplina/disciplina";
import { Nota } from "./Nota/notas";

const localAluno: Endereco = new Endereco('Rua A', ' bairro B', 0, '49300-000','Sergipe');
const localProfessor: Endereco = new Endereco('Rua D', ' bairro C', 1, '49300-000','Sergipe');
const construcaoSiteI = new Nota().calcularMediaPonderada(9.7,1,10,1); //instância das notas para calculo da média ponderada
const programacaoII = new Nota().calcularMediaPonderada(10,3,9,3);
const bancoDeDadosI = new Nota().calcularMediaPonderada(8,2,10,2);

const disciplinaProgramacaoII: Disciplina = new Disciplina('Programação II', 48,programacaoII);
const disciplinaBancoDeDadosI: Disciplina = new Disciplina('Banco de Dados I', 48,bancoDeDadosI);
const disciplinaConstrucaoSiteI: Disciplina = new Disciplina('Construção de Sites I', 24,construcaoSiteI);

const walber: Pessoa = new Aluno('masculino','00000000', 'walber', 'ruthierre', 29, true,[localAluno],'programação',[disciplinaProgramacaoII,disciplinaConstrucaoSiteI,disciplinaBancoDeDadosI], SituacaoAluno.ATIVO);
const wick : Pessoa = new Professor("Wick","Ruthierre",29, false, "Masculino","0909090909",[localProfessor],15000 );


console.log(walber);
console.log(wick);