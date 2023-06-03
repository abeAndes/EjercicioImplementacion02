export class EnVivo {
    constructor(nombre, streamer, canal, ...categoria) {
        this.categoria = [];
        this.nombre = nombre;
        this.streamer = streamer;
        this.canal = canal;
        this.categoria = categoria;
        this.AgregarCanal();
        this.AgregarCategoria();
        this.AgregarStreamer();
    }
    AgregarCanal() {
        this.canal.envivos.push(this);
    }
    AgregarCategoria() {
        this.categoria[this.categoria.length].Envivos.push(this);
    }
    AgregarStreamer() {
        this.streamer.envivo.push(this);
    }
}
//# sourceMappingURL=EnVivo.js.map