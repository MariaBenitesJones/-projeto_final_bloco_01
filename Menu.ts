import readlinesync from "readline-sync";

export function main() {

    let opcao: number;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
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

                keyPress()
                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");

                keyPress()
                break;
            case 3:
                console.log("\n\nListar Produto por Id \n\n");

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar Dados do Produto\n\n");

                keyPress()
                break;
            case 5:
                console.log("\n\nApagar Produto\n\n");

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