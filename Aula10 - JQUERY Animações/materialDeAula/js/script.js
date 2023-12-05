var caixa = $("#caixa")

$('#animacao1').on('click', function(){
    caixa.animate({width: "500px", heigth: "500px", borderRadius: "100%", marginLeft: "0px"})
})
$('#animacao2').on('click', function(){
    caixa.animate({width: "300px", heigth: "300px", borderRadius: "0"}).animate({marginLeft:"200px"})
})
$('#animacao3').on('click', function(){
    caixa.animate({marginTop: "300px", marginLeft: "100px", rotate : "360deg"},{duration: 1000, complete: () =>{alert("Se o seu cao tiver deprecao, então animacao")} })
})
$('#animacao4').on('click', function(){
    caixa.animate({marginTop: "0", marginLeft: "0", rotate: "0deg"},{duration: 1000})
})

$('#animacao5').on('click', function(){
    // caixa.hide(1000)
    // caixa.fadeOut(1000)
    caixa.slideUp(1000)
})
$('#animacao6').on('click', function(){
    // caixa.show(1000)
    // caixa.fadeIn(1000)
    caixa.slideDown(1000)
})
$('#animacao7').on('click', function(){
    // caixa.slideToggle(1000)
    caixa.fadeToggle(1000)
})
$('#animacao8').on('click', function(){
    caixa.css("transition", "1000ms")
    caixa.css("backgroundColor", "red")
    caixa.css("color", "black")
    $("#teste").attr("placeholder", "Isso é um input bacana")
    $(img).attr("src", "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia28891/cao-de-guarda-cpt.jpg")
})
