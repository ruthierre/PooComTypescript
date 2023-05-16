import { Pessoa } from "./Pessoa/Pessoa";
import { Aluno, SituacaoAluno } from "./Aluno/Aluno";
import { Professor } from "./Professor/Professor";
import { Endereco } from "./Endereco/Endereco";
import { Disciplina } from "./Disciplina/disciplina";

const localAluno: Endereco = new Endereco('Rua A', ' bairro B', 0, '49300-000','Sergipe');
const localProfessor: Endereco = new Endereco('Rua D', ' bairro C', 1, '49300-000','Sergipe');
const disciplinaAtual: Disciplina = new Disciplina('Programação II', 48,2);

const walber: Pessoa = new Aluno('masculino','00000000', 'walber', 'ruthierre', 29, true,[localAluno],'programação',[disciplinaAtual], SituacaoAluno.ATIVO);
const wick : Pessoa = new Professor("Wick","Ruthierre",29, false, "Masculino","0909090909",[localProfessor],15000 );


console.log(walber);
console.log(wick);