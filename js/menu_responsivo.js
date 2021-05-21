$(function(){
    $('.menu-mobile').click(function(){//ao cliclar no menu mobile faça uma função
        $(this).find('ul').slideToggle()//this é o próprio elemento menu mobile, procure a ul por meio do find e dá o slideToggle q é uma função de animação do jquery, lembrando q para q o slide togle funcione, o elemento q selecionamos, nesse caso a ul do menu mobile precisa estar com display none.
    })
});