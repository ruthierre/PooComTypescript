import { Nota } from "../Nota/notas";

class Disciplina {
    
    private _nome: string;
    private _cargaHoraria: number;
    private _nota: number;

    constructor( nome:string, cargaHoraria: number, nota:number){
        this._nome = nome;
        this._cargaHoraria = cargaHoraria;
        this._nota = nota;
    }

    public get nome(): string{
        return this._nome;
    }

    public set nome(value: string){
        this._nome;
    }

    public get cargaHoraria(): number{
        return this._cargaHoraria;
    }

    public set cargaHoraria(value: number){
        this._cargaHoraria;
    }

    public get nota(): number{
        return this._nota;
    }

    public set nota(value: number){
        this._nota;
    }

   
}
export{ Disciplina };