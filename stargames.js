const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let consoles = [ {
    nome: 'ATARI',
    jogo: 'RAIVER RAID'
}]

exibirEmulador()

function exibirEmulador() {
    console.log(`
    👾EMULADOR STAR⭐GAMES👾
            Y. START
            N. EXIT`)

    rl.question('DIGITE Y OU N: ', (opcao) => {
        switch (opcao) {
            case 'Y':
                start()
                break
            case 'N':
                rl.close()
                break
            default:
                console.log('OÇÃO INVÁLIDA, TENTE NOVAMENTE.')
                exibirEmulador()
        }
    })
}

function start() {
    console.log(`CONSOLES E OPÇÕES
    MENU:
    1. INSERIR CONSOLE
    2. ALTERAR CONSOLE
    3. LISTAR CONSOLES
    4. REMOVER CONSOLE
    5. SAIR`)
   
    rl.question('Digite a opção que voçê deseja: ', (opcao) => {
        switch (opcao) {
            case '1':
                inserirconsole()
                break
            case '2':
                alterarconsole()
                break
            case '3':
                listarconsole()
                break
            case '4':
                removerconsole()
                break
            case '5':
                rl.close()
            default:
                console.log('OPÇÃO INVÁLIDA, TENTE NOVAMENTE.')
                exibirEmulador()
        }
    })
}

function inserirconsole() {
    rl.question('DIGITE O NOME DO JOGO: ', (nome) => {
        rl.question('DIGITE QUAL JOGO VOÇÊ DESEJA: ', (jogo) => {
            consoles.push(nome, jogo)
            console.log('CONSOLE CADASTRADO COM SUCESSO!')
            exibirEmulador()
        })
    })
}

function listarconsole() {
    console.log('LISTA DE CONSOLES')
    consoles.forEach((consoles, index) => {
        console.log(`${index + 1}
        NOME: ${consoles.nome}
        JOGO: ${consoles.jogo}`)
    })
    exibirEmulador()
}