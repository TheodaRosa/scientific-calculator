import promptSync from 'prompt-sync';
import { soma } from './basicOperations/addition';
import { subtration } from './basicOperations/subtraction';
import { compountInterest } from './interest/compoundInterest';

const prompt = promptSync();

let opcao: string;

do {
    console.clear();
    console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    console.log(":                CALCULADORA CIENTIFICA                :");
    console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    console.log();
    console.log("Digite a função que deseja utilizar:");
    console.log();
    console.log("[1] SOMA");
    console.log("[2] SUBTRAÇÃO");
    console.log("[3] MULTIPLICAÇÃO");
    console.log("[4] DIVISÃO");
    console.log("[5] FATORIAL");
    console.log("[6] FUNCAO DE SEGUNDO GRAU");
    console.log("[7] CALCULO DE JUROS");
    console.log("[8] SAIR");
    console.log();
    opcao = prompt("Opção desejada: ");

    switch (opcao) {
        case '1':
            do {
                soma();
            } while (repetirOperacao());
            break;
        case '2':
            do {
                subtration();
            } while (repetirOperacao());
            break;
        case '3':
            do {
                //funcao multiplicacap
            } while (repetirOperacao());
            break;
        case '4':
            do {
                //funcao divisao
            } while (repetirOperacao());
            break;
        case '5':
            do {
                //funcao fatorial
            } while (repetirOperacao());
            break;
        case '6':
            do {
                //funcao segundo grau
            } while (repetirOperacao());
            break;
        case '7':
            do {
                selecionarTipoJuros();
            } while (repetirOperacao());
            break;
        case '8':
            console.log("PROGRAMA ENCERRADO!");
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
            break;
    }

    if (opcao !== '8') {
        prompt("Pressione Enter para continuar...");
    }

} while (opcao !== '8');

function repetirOperacao(): boolean {
    console.log();
    const resposta = prompt("Deseja repetir a mesma operação? (S/N): ");
    console.log()
    return resposta.toUpperCase() === 'S';
}

function selecionarTipoJuros(): void {
    console.clear();
    console.log("======= CALCULO DE JUROS =======");
    console.log("");
    console.log("Qual funcao deseja utilizar?");
    console.log("1 <- Juros Simples");
    console.log("2 <- Juros Compostos");
    console.log("");
    const resposta = prompt("Digite a sua resposta: ");

    switch (resposta) {
        case "1":
            break;
        case "2":
            compountInterest();
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
            break;
    }
}