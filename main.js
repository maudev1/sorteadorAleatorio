//settings
$(document).ready(() => {
    $('.notification').hide();

    $('.input').val('')

})

var friends = []

//add new friend function
const addNewFriend = $('.add').click(() => {
    if ($('input').val() == 0) {
        Swal.fire({
            title: 'Erro!',
            text: 'O campo nome não pode ficar vazio!',
            icon: 'error',
            confirmButtonText: 'fechar'
          })

    } else {

        $('ul').empty();
        friends.push($('input').val());


        createItemList();

        $('.input').val('')
    }
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
    $('ul').empty();

    friends.length = 0

});

//sort function
const sort = () => {

    if (friends.length <= 1) {

        Swal.fire({
            title: 'Erro!',
            text: 'É preciso ecolher pelo menos dois amigos!',
            icon: 'error',
            confirmButtonText: 'fechar'
          })

    } else {
        $('.sort').addClass('is-loading');

        var randomNumber = Math.floor((Math.random() * friends.length));

        console.log('Sorteando...');

        friends.map((friend, index) => {
            if (index == randomNumber) {
                setTimeout(() => {
                    // alert(friend + ' ira bancar o proximo churrasco!');

                    Swal.fire({
                        title: 'O próximo churras será na casa de '+ friend,
                        input: "text",
                        text: 'Digite o número Whatsapp do seu amigo para notificalo!',
                        icon: 'success',
                        confirmButtonText: 'enviar mensagem',
                        preConfirm: (tel) => {
                            let text = `Olá ${friend}, parabéns, você foi sorteado para bancar o próximo churrasco!`;

                            window.open(`https://wa.me/55${tel}?text=`+encodeURI(text))
                           
                        },
                        showCancelButton: true,
                        cancelButtonText:"cancelar"
                    })


                    $('.sort').removeClass('is-loading')
                }, 1000);

            }

        });

    }

}

//sort button
$('.sort').click(function () {
    sort();

})