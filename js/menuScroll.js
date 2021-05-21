$(function(){
    $('nav a').click(function(){//pega no nav o link, e ao clicar nesse link, execute uma função
        var href = $(this).attr('href') //pega o atributo href pra saber onde q tem q ir... chama o this. pra pegar algo do elemtno q clicamos, por isso o this, pega um atributo dele por meio da unfção attr e oq queremos pegar é o atributo href e salvar na variavel href
        var offSetTop = $(href).offset().top //guarda em uma variavel a nossa div q cliclou já com seu href e dá um offset top pra saber a distancia da div em relação à página(browser) em si
        
        $('html,body').animate({'scrollTop':offSetTop}); //pega o html e o body e dá uma animada com uma propriedade q é um objrto chamada scrollTop e dá como valor nossa distancia da div até a página em si, ai quando clica, direciona pra onde desjamos
        return false;//pra n atualizazr a pagina qnd for pra alguma opção
    })
})

/*
    $(function(){
    $('nav a').click(function(){//no link a da nav, quando der um clique nele execute uma função
        var href = $(this).attr('href');//guarda na variavel href. pega o this q é emrelção ao q foi clicado, esse q foi clicado, pega seu atributo href e salva 
        var offSetTop = $(href).offset().top; //pega o href q foi salvo e dá um offset pra saber a distancia dessa div q foi clicada e escolhida em relção ao browser, usa o top pra saber q queremos a distancia do topo
        
        $('html,body').animate({'scrollTop': offSetTop})//anima o html e o body por meio da função animate, q tem um array objeto com varios tipos de possiveis animações, no caso a q escolhemos foi a scroll top, q faz com q dê um scroll para o conteudo selecionado pois oq ela recebe é o offSetTop,q dá a distancia em relçaão ao navegador q ela deve percorrer
    })
    return false //pra q não atualize a página quando clicarmos
})
*/