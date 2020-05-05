//settings
$(document).ready(() => {
    $('.notification').hide();

    $('.input').val('')

})

var friends = []

//add new friend function
const addNewFriend = $('.add').click(() => {
    if ($('input').val() == 0)
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
createItemList();

//clear li element and friends array
const clearList = $('.clear').click(() => {
    $('li').empty();

    friends.length = 0

});

//sort function
const sort = () => {

    if (friends.length == 0) {
        $('.notification').show();

        setTimeout(() => {
            $('.notification').fadeOut();

        }, 2000)

    } else {

        $('.sort').addClass('is-loading');

        var randomNumber = Math.floor((Math.random() * friends.length));

        console.log('Sorteando...');

        friends.map((friend, index) => {
            if (index == randomNumber) {
                setTimeout(() => {
                    alert(friend + ' ira bancar o proximo churrasco!');
                    $('.sort').removeClass('is-loading')
                }, 1000);

            }

        });

    }

}

