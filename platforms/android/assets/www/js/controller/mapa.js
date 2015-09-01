var Mapa = function() {
    var mapa = {
        content:null,
        libMap:null,
        init: function() {
            var $tab = $('#tab-content');
            $tab.empty();
            $tab.load("./views/mapa.html", function(data) {
                $active = $('.active');
                $active.removeClass("active");
                $mapaButton = $("#mapa-tab-button");
                $mapaButton.addClass('active');
            });

            $.getScript( "js/lib/map.js", function( data, textStatus, jqxhr ) {
                if (jqxhr.status == 200) {
                    this.libMap = new LibMap();
                    var html = null;
                    html = "<h4 class='title'>Posição inicial</h4>"
                      +  "<p>Latitude: "+ this.libMap.latiStart+"</p>"
                      +  "<p>Longitude: "+ this.libMap.longStart+"</p>"
                      +  "<br /><br />"
                      +  "<h4 class='title'>Posição atual</h4>"
                      +  "<p>Latitude: "+ this.libMap.latiCurrent+"</p>"
                      +  "<p>Longitude: "+ this.libMap.longCurrent+"</p>";
                    $geo = $("#geolocation");
                    $geo.html(html);
                    console.log($geo);
                } else {
                    throw new Error("lib/map.js não foi carregado");
                }
            });
        },

        loadPosition: function() {
            console.log('inner');
            return map;
            // var html = null;
            // html = "<h4 class='title'>Posição inicial</h4>"
            //   +  "<p>Latitude: "+ this.libMap.latiStart+"</p>"
            //   +  "<p>Longitude: "+ this.libMap.longStart+"</p>"
            //   +  "<br /><br />"
            //   +  "<h4 class='title'>Posição atual</h4>"
            //   +  "<p>Latitude: "+ this.libMap.latiCurrent+"</p>"
            //   +  "<p>Longitude: "+ this.libMap.longCurrent+"</p>";
            // $geo = $("#geolocation");
            // $geo.html(html);
        }
    }
    mapa.init();
    return mapa;
}