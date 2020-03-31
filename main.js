let inputElemnt = document.querySelector('input');
let addButton = document.querySelector('.add');
let clearButton = document.querySelector('.clear');
let listElement = document.querySelector('ul');
let sortButton = document.querySelector('.sort');
let deleteButton = document.querySelector('.delete');
let noteElement = document.querySelector('.notification');

var amigos = [
]

function reload() {
    amigos.map((item, index) => {
        let listText = document.createTextNode(item);
        let itemElement = document.createElement("li");
        itemElement.appendChild(listText);
        listElement.appendChild(itemElement);

    });
}

//função para adicionar novo amigo
addButton.onclick = () => {
    listElement.innerHTML = '';
    amigos.push(inputElemnt.value);
    reload();
    console.log(inputElemnt.value + ' adicionado com sucesso!')
    inputElemnt.value = '';

}

//função para limpar lista de amigos
clearButton.onclick = () => {
    listElement.innerHTML = '';
    amigos.length = 0

}

//função para sortear
function sorteio() {
    if (amigos.length == 0) {

        noteElement.setAttribute('class', 'notification is-warning');

    } else {
        sortButton.setAttribute('class', 'button is-primary is-rounded sort is-loading');
        var x = Math.floor((Math.random() * amigos.length));
        console.log('Sorteando...');
        let map = amigos.map((item, index) => {
            if (index == x) {
                setTimeout(() => {
                    alert(item + ' ira bancar o churras!');
                    sortButton.setAttribute('class', 'button is-primary is-rounded sort');
                }, 1000);

            }

        });

    }

}

function deleteNote() {

    noteElement.setAttribute('class','is-hidden')

}

reload();