# Emulator Star Games
 Um programa de emuladores que respondem conforme o usuário digita as opções sugeridas pelo programa.
# Funções Básicas
Funções básicas são **Start** e **Exit** e fazem :
* **Start**: inicia o emulador;
* **Exit**: encerra o programa;
```JavaScript
  👾EMULADOR STAR⭐GAMES👾
            Y. START
            N. EXIT
```

# Menu e Funções Principais
Esse é o **Menu** e as funções principais são:
* **Inserir**;
* **Alterar**;
* **Listar**;
* **Remover**;
* **Sair**;

```JavaScript
  MENU:
    1. INSERIR CONSOLE
    2. ALTERAR CONSOLE
    3. LISTAR CONSOLES
    4. REMOVER CONSOLE
    5. SAIR
```

1. **Inserir Console**: 
* Descrição: Esta função permite ao usuário adicionar um novo console à coleção de consoles suportados pelo emulador.

```JavaScript
function inserirconsole() {
    rl.question('DIGITE O NOME DO CONSOLE: ', (nome) => {
        rl.question('DIGITE QUAL JOGO VOÇÊ DESEJA: ', (jogo) => {
            consoles.push({nome, jogo})
            console.log('CONSOLE CADASTRADO COM SUCESSO!')
            exibirEmulador()
        })
    })
}
```
Processo: Solicita as informações do usuário, valida os dados inseridos e armazena o novo console na estrutura de dados apropriada.

2. **Alterar Console**:
* Descrição: Esta função permite ao usuário modificar as informações de um console previamente inserido na coleção do emulador.

```JavaScript
function alterarconsole() {
    console.log('LISTA DE CONSOLES')
    consoles.forEach((consoles, index) => {
        console.log(`${index + 1}. ${consoles.nome}`)
    })
    rl.question('DIGITE O NÚMERO DA OPÇÃO QUE DESEJA: ', (numero) => {
        numero = parseInt(numero)

        if(numero > 0 && numero <= consoles.length) {
            rl.question('DIGITE O NOVO NOME DO CONSOLE: ', (nome) => {
                rl.question('DIGITE O NOVO JOGO: ', (jogo) => {
                    consoles[numero - 1] ={nome, jogo}
                    console.log('CONSOLE ALTERADO COM SUCESSO.')
                    exibirEmulador()
                })
            })
        }
        else{
            console.log('OPÇÃO INVÁLIDA, TENTE NOVAMENTE')
            alterarconsole()
        }
    })
}
```
 Processo: Exibe a lista de consoles, permite a seleção de um console específico, solicita as novas informações, valida os dados e atualiza a entrada existente na estrutura de dados.

3. **Listar Console**:
* Descrição: Esta função exibe ao usuário a lista completa de todos os consoles atualmente inseridos no emulador.

```JavaScript
function listarconsole() {
    if(consoles == 0) {
        console.log('NÃO HÁ CONSOLES ADICIONADOS')
        exibirEmulador()
    }
    else{
        console.log('LISTA DE CONSOLES')
        consoles.forEach((consoles, index) => {
            console.log(`${index + 1}
            NOME: ${consoles.nome}
            JOGO: ${consoles.jogo}`)
        })
        exibirEmulador()
    }
}
```
Processo: Acessa a estrutura de dados que armazena os consoles e itera sobre ela para exibir todas as entradas ao usuário.

4. **Remover Console**:
* Descrição: Esta função permite ao usuário remover um console específico da coleção de consoles do emulador.

```JavaScript
function removerconsole() {
    console.log('LISTA DE CONSOLES')
    consoles.forEach((consoles, index) => {
        console.log(`${index + 1}. ${consoles.nome}`)
    })
    rl.question('DIGITE O NÚMERO DO CONSOLE QUE DESEJA REMOVER: ', (numero) => {
        numero = parseInt(numero)

        if(numero > 0 && numero <= consoles.length) {
            consoles.splice(numero -1, 1)
            console.log('CONSOLE EXCLUÍDO COM SUCESSO')
            exibirEmulador()
        }
        else{
            console.log('OPÇÃO INVÁLIDA, TENTE NOVAMENTE.')
            removerconsole()
        }
    })
    exibirEmulador()
}
```
Processo: Exibe a lista de consoles, permite a seleção de um console específico, valida a seleção e remove o console da estrutura de dados.

5. **Sair**:
* Descrição: Esta função permite ao usuário encerrar a execução do emulador de forma segura.

```JavaScript
rl.close()
```

Processo: Realiza quaisquer operações necessárias para salvar o estado atual (se aplicável) e encerra a execução do programa.