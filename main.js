const openMenu = document.getElementById('btn-contacts')
const menu = document.getElementById('add-contact')
const cancell = document.getElementById('cancel')
const add = document.getElementById('add')
const names = []
const numbers = []

let lines = ''

openMenu.addEventListener('click', ()=> { // colocando animacao no botao "+"
    menu.classList.toggle('add')
    add.classList.add('inactive')

    check()
})

cancell.addEventListener('click', ()=> { // removendo animacao clicando no botao "cancel"
    menu.classList.remove('add')
})

add.addEventListener('click', ()=> { // botao "ok"
    addLine()
    uptadeLine()
}) 

function capitalizeFirstLetter(string) { // funcao para deixar a primeira letra maiuscula
    return string.replace(/^./, string[0].toUpperCase());
}

function addLine() { // funcao para adicionar a linha no tbody
    const name = document.getElementById('name')
    const lastName = document.getElementById('last-name')
    const numberPhone = document.getElementById('cel')
    let completNames = ''
    let testename = ''

    if (numbers.includes(numberPhone.value)) {
        for (let i = 0; i < names.length; i++) {
            if (numbers[i] === numberPhone.value) {
                testename = names[i]
            }
        }
        alert(`O ${numberPhone.value} ja esta registrado na lista de contato, com o nome de ${testename}`)
    } else {
        completNames = `${capitalizeFirstLetter(name.value)} ${capitalizeFirstLetter(lastName.value)}`
        names.push(capitalizeFirstLetter(completNames))
        numbers.push(numberPhone.value)

        let line = '<tr>'
        line += `<td>${completNames}</td>`
        line += `<td>${numberPhone.value}</td>`
        line += '</tr>'

        lines += line
    }

    name.value = ''
    lastName.value = ''
    numberPhone.value = ''
    menu.classList.remove('add')
}

function uptadeLine() {
    const update = document.querySelector('.names-numbers')
    update.innerHTML = lines
}


function check() {
    const inputs = document.querySelectorAll('input'); // Seleciona todos os inputs
    const input1 = document.getElementById('name'); // Primeiro input
    const input2 = document.getElementById('cel'); // Segundo input

    inputs.forEach(input => {
        input.addEventListener('keyup', function() {
            // Verifica se ambos os inputs estão preenchidos
            if (input1.value !== '' && input2.value !== '') {
                add.classList.remove('inactive')
            } else {
                add.classList.add('inactive')
            }
        });
    });
}
