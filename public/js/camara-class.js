

class Camara {

    constructor(videoNode) {

        this.videoNode = videoNode;
        console.log('Camara Class');

    }

    encender() {
        navigator.mediaDevices.getUserMedia( {
            audio: false,
            video: { width: 300 , height: 300 }

        }).then(stream => {

            this.videoNode.srcObject = stream;
            this.stream = stream;
        } );
    }

    apagar() {

        this.videoNode.pause();

        if( this.stream ) {
            this.stream.getTracks()[0].stop();
        }

    }







    tomarFoto() {
        //crear un lelemento  canvas para renderizzar ahi la foto
        let canvas = document.createElement('canvas');

        //colocar las dimenciones igual al elemento del video
        canvas.setAttribute('width', 300);
        canvas.setAttribute('height', 300);


        //obtener el conntexto  del camvas
        let context = canvas.getContext('2d'); //una simple imagen 

        //dibujar la imagen demtro del canvas
        context.drawImage( this.videoNode, 0, 0, canvas.width, canvas.height);

        this.foto = context.canvas.toDataURL();

        //limpiesa
        canvas = null;
        context = null;

        return this.foto;


    }


}