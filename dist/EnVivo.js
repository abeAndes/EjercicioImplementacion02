export var ListaE = [];
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
        this.ListarEnvivo();
    }
    AgregarCanal() {
        this.canal.envivos.push(this);
    }
    AgregarCategoria() {
        for (let i = 0; i < this.categoria.length; i++) {
            this.categoria[i].Envivos.push(this);
        }
    }
    AgregarStreamer() {
        this.streamer.envivo.push(this);
    }
    ListarEnvivo() {
        ListaE.push(this);
    }
    Detalles() {
        let categorias = this.categoria.map(Cat => Cat.nombre);
        console.log(" " + this.nombre + " " + this.streamer + " " + this.canal + " " + categorias);
    }
}
//# sourceMappingURL=EnVivo.js.map