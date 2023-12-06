var aparecer = $('#mouseOver')
aparecer.on('mouseover', function(){
    $('#btnMostrar').css('display', 'none') 
    $('#btnMostrar').css('transition', '2000ms')
    $('#btnMostrar').css('display', 'block');
        
    }
)

var mostrar = $('#btnMostrar')
mostrar.on('click', function(){
    $(btnTema).css('display', 'block')
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
btnTema.on("click", function(){
    if(page.hasClass('temaClaro')){
        page.removeClass('temaClaro')
        page.addClass('temaEscuro')
    }else{
        page.removeClass('temaEscuro')
        page.addClass('temaClaro')
    }
})

var caixa = $('#caixa')
btnTema.on('click', function(){
    if(page.hasClass('temaEscuro')){
        caixa.css('display', 'block')
    }else{
        caixa.css('display', 'none')
    }
})


btnTema.on('click', function(){
    caixa.animate({width: "500px", heigth: "500px", borderRadius: "100%", marginLeft: "1000px"})
})

var caixa2 = $('#caixa2')

btnTema.on('click', function(){
    if(page.hasClass('temaEscuro')){
        caixa2.css('display', 'block')
    }else{
        caixa2.css('display', 'none')
    }
})
btnTema.on('click', function(){
    caixa2.animate({width: "500px", heigth: "500px", borderRadius: "100%", marginRigth: "1000px"})
})

var girar = $('#girar')
btnTema.on('click', function(){
    if(page.hasClass('temaEscuro')){
        girar.css('display', 'block')
    }else{
        girar.css('display', 'none')
        caixa2.animate({marginTop: "0", marginLeft: "0", rotate : "0"})
    }
})

girar.on('click', function(){
    caixa2.animate({marginTop: "300px", marginLeft: "100px", rotate : "360deg"})
    caixa2.css("transition", "1000ms")
    caixa2.css("backgroundColor", "white")
    caixa2.css("color", "black")

})

