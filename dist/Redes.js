export class Redes {
    constructor(nombre, descripcion, streamer) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.streamer = streamer;
        this.AgregarStreamer();
    }
    AgregarStreamer() {
        this.streamer.redes.push(this);
    }
}
//# sourceMappingURL=Redes.js.map