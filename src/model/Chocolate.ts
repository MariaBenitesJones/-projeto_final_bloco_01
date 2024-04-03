import { Produto } from "./Produto";

export class Chocolate extends Produto {
    static visualizar() {
        throw new Error("Method not implemented.");
    }
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
        console.log("**********************************************")
        console.log("                      TIPO                    ")
        console.log("**********************************************")
        console.log(`\nPorcentagem de Cacau: ${this._porcentagem}%`);

        let tipo = this.porcentagem;

        if (tipo <= 50 && tipo >= 40) {
            console.log("Chocolate meio amargo\n");
        }
        else if (tipo > 50) {
            console.log("Chocolate amargo\n");
        }
        else if (tipo >= 25 && tipo <= 39) {
            console.log("Chocolate ao leite\n");
        }
        else if (tipo < 25) {
            console.log("Chocolate Branco\n");
        }
        else {
            console.log("Porcentagem inexistente!\n")
        }
    }
}