$(function(){

    var delay = 6000;//delay pra usar no set interval
    var curIndex = 0;//guarda na variavel chamada curindex q do ingles é current index, ou seja, posição atual
    var amt;
    initSlider();
    autoPlay();
    

    function initSlider(){
        amt = $('.sobre-mim').length; //pega a quantidade de 'sobre-mins' q tem, ou seja, pega quantos sobre tem, q no caso desse são 3(pra tres pessoas, tres icaros no caso kkk)
        var sizeContainer = 100 * amt; //300% de espaço pois são 3 sobres
        var sizeBoxSingle = 100 / amt;  //tamanho de cada div individual desse container q tá o sobre com base nesse 300%.. 300/3 é 100% cada uma
        
        $('.sobre-mim').css('width',sizeBoxSingle+'%') //pega o sobre-mim, tranforma o css dele em um com width de 100% , mas como são 3, cada um vai ter o seu 100%
        $('.scroll-wraper').css('width',sizeContainer+'%') //pega o scroll wraper, q vai englobar todos os sobres pra poder dar um scroll nele, ou seja, poder passar de um pra outro, dependendo do overflow como tiver , vai ter os tres sobres porém só aparecendo um , pois os outros vão estar escondidos esperando dar um scroll pra aparecerem
    

        //bolinhas do slide dinâmicas
        for(var i = 0; i < amt; i++){//looping pra contagem das bolinhas em referência com quantos autores vao ter, ou seja, se tiver 3 autores, sao 3 bolinhas, se tiver 10 autos, sao 10 bolinhas, assim, os dois ficam dinamicos e relacionados
            if(i == 0){ //se o i for zero, q é a primeira(q já vem selecionado) de indice zero , faça:
                $('.bolinhas').append('<span style="background:rgb(102, 145,236);"></span>'); //pegar a div bolinhas q foi criada justamente pra isso aqui se adequar lá, dá um append de spans, ou seja, liga esse span na ultima localização dessa div bolinahs, como  n tem nada lá, vai ficar como primeiro
            }else{//se n...
                $('.bolinhas').append('<span></span>');//se  n for a de indice 0, ou seja, a primeira, adiciona só outros spans pra ficar marcado lá(mais pra frente vamo fazer esses spans ficarem da cor do marcado)
            }
        }
    }

    function autoPlay(){/*pro slide ficar rodando automático*/ 
        setInterval(function(){//função de intervalo pra ficar rodando
            curIndex++;//looping na nossa posição inicial, ir implementando a cada giro
            if(curIndex == amt){//aqui já começa a combar, se a posição atual for igual a quantidade de sobres(q é quando chega no final, q é três, ai reseta pra zero pra refazer o looping e continuar com slide até chegar no 3 novamente, e assim fica pra sempre)
                curIndex = 0;//posição atual é 0
            }
            goToSlide(curIndex);
        },delay);//tempo q tá em uma variável global
    }

    function goToSlide(curIndex){//função de troca de slide em si
       
        var offSetX = $('.sobre-mim').eq(curIndex).offset().left - $('.scroll-wraper').offset().left; //guarda no offsetX : pega o sobre-mim q é conteudo q queremos q dê o slide,chama o eq e dá o parametro cur index pra poder dizer qual posicao o elemento tá atualmente(posição atual por meio do eq... precisa ser o curindex pois não é uma posição fixa, e sim uma q fica mudando a cada 3 segundos) , dá um offset left por ultimo pq ai faz com q pegue todos esses elementos e a cada um q passa, descubra a distancia do sobre da vez em relação ao browser, dai diminui esse valor encontrado pelo scroll-wraper offset, q pega a distancia da div q engloba todo esses sobres pra descontar e ficar tudo certinho... scroll-wraper é onde tá todos elementos , por isso precisa retirar dele oq queremos usar
        $('.bolinhas span').css('background-color','rgb(200,200,200)')//todos os spans ficam na cor normal deles q é essa
        $('.bolinhas span').eq(curIndex).css('background-color','rgb(170,170,170)')//pega o span e diz o q da posição atual vai ter a cor diferenciada, ai toda vez q trocar de posição atual, troca a cor também
        $('.scrollEquipe').animate({'scrollLeft':offSetX+'px'});//aqui só faz chamar a scroll equipe, q é a div q a gente vai animar(a div scrollEquipe é onde contém os 3 sobres) dai dá um animate q é uma função do jquery, q chama um array com objetos, nesse caso é o scrollLeft pra usar, pois vai ir pra esquerda  de acordo com o valor já bruto da div menos o browser e dá a animação

    }

    $(window).resize(function(){//quando a janela der um resize, ou seja, trocar de tela, execute uma função
        $('.scrollEquipe').animate({'scrollLeft':0});//quando der resize, a posição do scroll volta pra 0, pra remoçar o ciclo normalmente  e sem bugs
    })

});