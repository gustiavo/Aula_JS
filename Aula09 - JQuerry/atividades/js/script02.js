var btnTema = $("#toggle")
var body = $('body')
btnTema.on("click", function(){
    if(btnTema.hasClass('temaClaro')){
        // btnTema.classList.replace('temaClaro','temaEscuro)
        btnTema.removeClass('temaClaro')
        btnTema.addClass('temaEscuro')
        btnTema.text('TEMA ESCURO')
    }else{
        btnTema.removeClass('temaEscuro')
        btnTema.addClass('temaClaro')
        btnTema.text('TEMA CLARO')
    }
})
body.on("click", function(){
    if(body.hasClass('temaClaro')){
        body.removeClass('temaClaro')
        body.addClass('temaEscuro')
    }else{
        body.removeClass('temaEscuro')
        body.addClass('temaClaro')
    }
})