import readlinesync from "readline-sync";
import { ProdutoController } from "./src/controller/ProdutoController";
import { Chocolate } from "./src/model/Chocolate";

export function main() {

    let preco, porcentagem, gramas, id: number;
    let nome: string;

    const produtoController: ProdutoController = new ProdutoController();

    produtoController.cadastrarProduto(new Chocolate(produtoController.gerarId(),
        "Sonho de Lua", 120, 100, 50));

    let opcao: number;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                     CÉU DE CACAU                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Listar Produto por Id                ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            0 - Sair                                 ");;
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log("\nCéu de cacau - Sua vida mais doce é aqui!\n");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Produto \n\n");


                nome = readlinesync.question("Digite o Nome do Produto: ");

                preco = readlinesync.questionFloat("Digite o preco: ");

                porcentagem = readlinesync.questionInt("Digite a porcentagem de cacau do produto: ");

                gramas = readlinesync.questionInt("Digite as gramas do produto: ");

                produtoController.cadastrarProduto(new Chocolate(produtoController.gerarId(), nome, gramas, preco, porcentagem));

                keyPress()
                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");

                produtoController.listarTodosOsProdutos();

                keyPress()
                break;
            case 3:
                console.log("\n\nListar Produto por Id \n\n");

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                produtoController.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar Dados do Produto\n\n");


                id = readlinesync.questionInt("Digite o Id do Produto: ");

                let produto = produtoController.buscarNoArray(id);

                if (produto !== null) {

                    nome = readlinesync.question("Digite o Nome do Produto: ");

                    preco = readlinesync.questionFloat("Digite o preco: ");

                    porcentagem = readlinesync.questionInt("Digite a porcentagem de cacau do produto: ");

                    gramas = readlinesync.questionInt("Digite as gramas do produto: ");

                    produtoController.atualizarProduto(new Chocolate(id, nome, gramas, preco, porcentagem));

                }
                keyPress()
                break;
            case 5:
                console.log("\n\nApagar Produto\n\n");

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                produtoController.deletarProduto(id);

                keyPress()
                break;
            default:
                console.log("\nOpção Inválida! Digite uma opção valida!\n");

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
export function sobre(): void {
    console.log("\n******************************************************");
    console.log("projeto Desenvolvido por: Maria Eduarda Benites Jones");
    console.log("Generation Brasil - mariaeduardabmrj@gmail.com");
    console.log("github.com/MariaBenitesJones");
    console.log("******************************************************");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();