export class Redes {
    constructor(nombre, red, descripcion, streamer) {
        this.nombre = nombre;
        this.red = red;
        this.descripcion = descripcion;
        this.streamer = streamer;
        this.AgregarStreamer();
    }
    AgregarStreamer() {
        this.streamer.redes.push(this);
    }
}
//# sourceMappingURL=Redes.js.map