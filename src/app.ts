import { Pessoa } from "./Pessoa";
import { Aluno, SituacaoAluno } from "./Aluno";
import { Professor } from "./Professor";

const walber: Aluno = new Aluno('masculino','00000000', 'walber', 'ruthierre', 29, true,['rua A'],'programação', SituacaoAluno.ATIVO);
//const wick: Pessoa = new Pessoa("john", "wick", 23, true , ["Rua b"]);

const wick : Professor = new Professor("Wick","Ruthierre",29, false, "Masculino","0909090909",["rua Z"],15000 );

//const diego : Professor = new Professor(202300112233, " diego armando", 35, "masculino", "000.000.0000-00", "rua A do zenzin ");


console.log(walber);
console.log(wick);

walber.submeterProjetoExtensao();
walber.submeterProjetoPesquisa();

wick.submeterProjetoExtensao();
wick.submeterProjetoPesquisa();
walber.exibirEndereco();
wick.exibirEndereco();