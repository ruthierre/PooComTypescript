import { Endereco } from "../Endereco/Endereco";
import { error } from "console";
abstract class Pessoa{

    private _matricula: number = 0;
    private _sexo: string;
    private _CPF: string;
    private _nome: string;
    private _sobrenome: string;
    private _idade: number;
    private _brasileiro: boolean;
    private _enderecos: Endereco[];
    
   
    
    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        brasileiro: boolean,
        enderecos: Endereco[],
        sexo: string,
        CPF: string)
        {
            
            this._sexo = sexo;
            this._CPF = CPF;
            this._nome = nome;
            this._sobrenome =sobrenome;
            this._idade = idade;
            this._brasileiro = brasileiro;
            this._enderecos = enderecos;
            Pessoa.quantidadePessoas += Pessoa.quantidadePessoas;
        }
        
        public get matricula(): number {
            return this._matricula;
        }
        public set matricula(value: number) {
            this._matricula = value;
        }
        
        public get sexo(): string {
            return this._sexo;
        }
        public set sexo(value: string) {
            this._sexo = value;
        }
        
        public get CPF(): string {
            return this._CPF;
        }
        public set CPF(value: string) {
            let padraoCPF: RegExp = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
            if(padraoCPF.test(value)){
                this._CPF = value;
            }else{
                throw error (`CPF Invalido`);
            }
        }

        public get nome(): string {
            return this._nome;
        }
        public set nome(value: string) {
            this._nome = value;
        }
        
        public get sobrenome(): string {
            return this._sobrenome;
        }
        public set sobrenome(value: string) {
            this._sobrenome = value;
        }
        
        public get idade(): number {
            return this._idade;
        }
        public set idade(value: number) {
            this._idade = value;
        }
        static quantidadePessoas: number = 0;
        public get brasileiro(): boolean {
            return this._brasileiro;
        }
        public set brasileiro(value: boolean) {
            this._brasileiro = value;
        }
        
        public get enderecos(): Endereco[] {
            return this._enderecos;
        }
        public set enderecos(value: Endereco[]) {
            this._enderecos = value;
        }
        
        exibirNomeCompleto() : string {
            return( `O nome completo é: ${this.nome} ${this.sobrenome}`);
        }
        
    //  recuperarEndereco(posicao: number) : Endereco[] {
    //      return this.enderecos[posicao];
    //  }

    static recuperarQuantidadePessoas(): number {
        return Pessoa.quantidadePessoas;
    }

    abstract gerarMatricula() : number ;
    
}
export {Pessoa}