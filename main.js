let inputElemnt = document.querySelector('input');
let addButton = document.querySelector('.add');
let clearButton = document.querySelector('.clear');
let listElement = document.querySelector('ul');
let sortButton = document.querySelector('.sort');
let deleteButton = document.querySelector('.delete');
let noteElement = document.querySelector('.notification');

//settings
$(document).ready(()=>{
    $('.notification').hide();

    $('.input').val('')

})

var friends = []

//add new friend function
const addNewFriend = $('.add').click(() => {
    if($('input').val() == 0)
    alert('é preciso por um nome');

    $('ul').empty();
    friends.push($('input').val());
    createItemList();

    $('.input').val('')
    console.log($('input').val() + ' adicionado com sucesso!')

})

//create a new li element
const createItemList = () => {
    friends.map((item, index) => {
        let liElement = $('<li></li>').text(item);
        $('ul').append(liElement)

    });
};

//clear li element and friends array
const clearList = $('.clear').click(() => {
    $('li').empty();

    friends.length = 0

});

//função para sortear
function sorteio() {
    if (friends.length == 0) {
        $('.notification').show();

        setTimeout(() => {
            $('.notification').fadeOut();

        }, 2000)

    } else {
        sortButton.setAttribute('class', 'button is-primary is-rounded sort is-loading');
        var x = Math.floor((Math.random() * friends.length));
        console.log('Sorteando...');
        let map = friends.map((item, index) => {
            if (index == x) {
                setTimeout(() => {
                    alert(item + ' ira bancar o proximo churrasco!');
                    sortButton.setAttribute('class', 'button is-primary is-rounded sort');
                }, 1000);

            }

        });

    }

}

createItemList();