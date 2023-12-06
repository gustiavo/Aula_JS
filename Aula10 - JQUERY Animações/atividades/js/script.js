var aparecer = $('#mouseOver')
aparecer.on('mouseover', function(){
    $('#btnMostrar').css('display', 'none') 
    $('#btnMostrar').css('transition', '2000ms')
    $('#btnMostrar').css('display', 'block');
        
    }
)

var mostrar = $('#btnMostrar')
mostrar.on('click', function(){
    $('button').css('display', 'block')
})




var btnTema = $("#toggle")
var page = $('#page')
btnTema.on("click", function(){
    if(btnTema.hasClass('temaClaro')){
        btnTema.removeClass('temaClaro')
        btnTema.addClass('temaEscuro')
        btnTema.text('TEMA ESCURO')
    }else{
        btnTema.removeClass('temaEscuro')
        btnTema.addClass('temaClaro')
        btnTema.text('TEMA CLARO')
    }
})
page.on("click", function(){
    if(page.hasClass('temaClaro')){
        page.removeClass('temaClaro')
        page.addClass('temaEscuro')
    }else{
        page.removeClass('temaEscuro')
        page.addClass('temaClaro')
    }
})
