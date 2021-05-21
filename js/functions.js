window.onload = function(){
    
    var map;/* variável map*/

    function initialize(){ /*função de inicializar*/
        var mapProp = { /*variavel com propriedades do mapa(array ou objeto)*/ 
            center: new google.maps.LatLng(-1.454980,-48.502270),/*lat e long da minha localdiade*/ 
            scrollwheel:false,/*pra n rolar junto com scroll do resto do site*/
            zoom:12,/*obvio,zoom*/ 
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    
        
    }

    function addMarker(lat,long,icon,content,click){/*função pra adicionar uma marca no mapa */ 
        var latLng = {'lat':lat,'lng':long};/*dentro do array ou do objeto latLng tem dois parametros, lat e long*/

        var marker = new google.maps.Marker({/*cria um novo objeto marker q vai ter outro array com as caracteristicas dele, ou seja é uma cópia da função google.maps porém com novas caracterirsiticas q vão fazer relação com a variável marker*/
            position:latLng,/*posição faz referência à variável latLng que contem os parametros latitude e longitute*/
            map:map, /* faz referência à var map global*/
            icon:icon,
        });
        
        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20)
        });


        if(click == true){
            google.maps.event.addListener(marker,'click',function(){/*pra que quando clique , apareça map marker que tem o nome do endereço*/
                infoWindow.open(map,marker);
            });
    }else{
        infoWindow.open(map,marker);
    }
     
    
    }

    initialize();/*chamando a função para ser executada*/
    var conteudo = '<p style="color:black;font-size:18px;padding:10px 0;">Passagem do Triângulon,número 22.</p>';


    setTimeout(function(){/*animação que faz pular do primeiro q definimos pra esse daqui*/
    map.panTo({'lat':-1.293730,'lng':-48.475849}); /*função que já muda o foco do mapa pra outro lugar, bom pra fazer animação*/
    map.setZoom();
},4000);

    addMarker(-1.2995759,-48.4699905,'',conteudo,true);/*chamando a função de marcador de mapa pra ser executada, chamei também a variavel conteudo e disse oq ela era ali em cima, tendo caracteristca personalizadas pra aparecer no mapa o endereço com uma barra e escrito*/


    }



