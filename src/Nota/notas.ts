class Nota {
    // private _nota: number;
    // private _peso: number;
    
    // constructor(nota:number, peso:number){
    //     this._nota = nota;
    //     this._peso = peso;
    // }

    // public get nota():number {
    //     return this._nota;
    // }
    // public set nota(value: number){
    //     this._nota;
    // }

    // public get peso(): number{
    //     return this._peso;
    // }
    // public set peso(value: number){
    //     this._peso;
    // }

    calcularMediaPonderada(nota1: number, peso1: number, nota2: number, peso2: number): number {
        const somaPesos = peso1 + peso2;
        const notaPonderada1 = nota1 * peso1;
        const notaPonderada2 = nota2 * peso2;
        const mediaPonderada = (notaPonderada1 + notaPonderada2) / somaPesos;
        return mediaPonderada;
    }

}

export { Nota };