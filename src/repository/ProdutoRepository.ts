import { Produto } from "../model/Produto";

export interface ProdutoRepository{

    // Métodos do CRUD ( Create, Read, Update, Delete)
    procurarPorId(id: number): void;
    listarTodosOsProdutos(): void;
    cadastrarProduto(produto: Produto): void;
    atualizarProduto(produto: Produto): void;
    deletarProduto(id: number): void;
    
}