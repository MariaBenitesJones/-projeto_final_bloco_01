import { Produto } from "./Produto";

export class Chocolate extends Produto{
    private _porcentagem: number;


	constructor(id: number, nome: string, gramas: number, preco: number, porcentagem: number) {
        super(id, nome, gramas, preco)
		this._porcentagem = porcentagem;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get porcentagem(): number {
		return this._porcentagem;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set porcentagem(value: number) {
		this._porcentagem = value;
	}
    
    public visualizar(): void {

        super.visualizar();
        console.log(`\nPorcentagem de Cacau: ${this._porcentagem}%`);
    }
}