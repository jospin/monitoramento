var LibMap = function() {
    var libmap = {
        latiStart:null,
        longStart:null,
        latCurrent:null,
        longCurrent:null,
        init:function(){
            navigator.geolocation.getCurrentPosition(
                this.successCurrentPosition,
                this.error,
                {enableHighAccurancy:true,maximumAge:30000}
            );

        },

        successCurrentPosition:function(position){
            this.latiStart = position.coords.latitude;
            this.longStart = position.coords.lomgitude;
        },

        successWatchPosition:function(position){
            console.log(position);
            this.latiCurrent = position.coords.latitude;
            this.longCurrent = position.coords.lomgitude;
        },        

        error:function(error){
            alert("Erro ao tentar pegar a posição" + error.message);
        },

        listenWatch: function(){
            
            return navigator.geolocation.watchPosition(
                this.successWatchPosition,
                this.error,
                {enableHighAccurancy:true,maximumAge:10000,timeout:30000}
            );
        }

    }
    libmap.init();
    return libmap;

}