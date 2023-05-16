class Disciplina {
    
    private _nome: string;
    private _cargaHoraria: number;
    private _periodo: number;

    constructor( nome:string, cargaHoraria: number, periodo:number){
        this._nome = nome;
        this._cargaHoraria = cargaHoraria;
        this._periodo = periodo;
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

    public get periodo(): number{
        return this._periodo;
    }

    public set periodo(value: number){
        this._periodo;
    }
}

export{ Disciplina };