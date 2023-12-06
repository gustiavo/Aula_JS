var duracao = 10000
$('#btnPlay').on('click', function(){
    $('.progress-bar').animate({width: '100%'}, {duration: duracao})
})