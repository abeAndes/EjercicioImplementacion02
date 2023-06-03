export var ListaS = [];
export class Streamer {
    constructor(nombre, nickname, descripcion, ...canales) {
        this.canales = [];
        this.nombre = nombre;
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.canales = canales;
        this.redes = [];
        this.envivo = [];
        this.ListarStreamer();
        this.RegistrarC();
    }
    ListarStreamer() {
        ListaS.push(this);
    }
    RegistrarC() {
        for (let i = 0; i < this.canales.length; i++) {
            this.canales[i].streamers.push(this);
        }
    }
    AgregarC(canal) {
        this.canales.push(canal);
        this.canales[this.canales.length - 1].streamers.push(this);
    }
    AgregarE(stream) {
        this.envivo.push(stream);
    }
    Detalles() {
        let red = this.redes.map(Red => "\n" + Red.red + " como: " + Red.nombre);
        let Env = this.envivo.map(Env => "\n" + Env.nombre);
        console.log(" " + this.nombre + " " + this.nickname + " " + this.descripcion + " " + Env + " Me puedes encontrar en: " + red);
    }
}
//# sourceMappingURL=Streamer.js.map