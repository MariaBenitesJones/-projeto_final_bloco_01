export abstract class Produto {

    private _id: number;
    private _nome: string;
    private _gramas: number;
    private _preco: number;

    constructor(id: number, nome: string, gramas: number, preco: number) {
        this._id = id;
        this._nome = nome;
        this._gramas = gramas;
        this._preco = preco;
    }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get gramas(): number {
		return this._gramas;
	}

    /**
     * Getter preco
     * @return {number}
     */
	public get preco(): number {
		return this._preco;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set gramas(value: number) {
		this._gramas = value;
	}

    /**
     * Setter preco
     * @param {number} value
     */
	public set preco(value: number) {
		this._preco = value;
	}
    public visualizar(): void{
        
        console.log("****************************************************")
        console.log("                       PRODUTO                      ")
        console.log("****************************************************")
        console.log(`Id do produto: ${this._id}`)
        console.log(`Nome do produto: ${this._nome}`)
        console.log(`Gramas do produto: ${this._gramas}g`)
        console.log(`Preço do produto: R$${this._preco}\n`)
    }
}