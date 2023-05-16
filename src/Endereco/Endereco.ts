class Endereco {
    
    private _rua: string;
    private _bairro: string;
    private _numero: number;
    private _cep: string;
    private _estado: string;

    constructor(rua:string, bairro: string, numero: number, cep: string, estado:string){
        this._rua = rua;
        this._bairro = bairro;
        this._numero = numero;
        this._cep = cep;
        this._estado = estado;
    }

    public get rua(): string {
        return this._rua;
    }
    public set rua(value: string) {
        this._rua = value;
    }

    public get bairro(): string {
        return this._bairro;
    }
    public set bairro(value:string){
        this._bairro = value;
    }

    public get numero(): number{
        return this._numero;
    }
    public set numero(value: number){
        this._numero = value;
    }
    
    public get cep(): string {
        return this._cep;
    }
    public set cep(value: string){
        this._cep = value;
    }

    public get estado(): string {
        return this._estado;
    }
    public set estado(value: string){
        this._estado;
    }
}

export { Endereco };