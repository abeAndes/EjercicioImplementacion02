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
        let can = this.canales.map(can => "\n" + can.nombre);
        let stream = this.envivo.map(str => "\n" + str.nombre);
        console.log(" " + this.nombre + " " + this.nickname + " " + this.descripcion + " " + Env + " \nMe puedes encontrar en: " + red + "\nEstoy en los canales: " + can + "\n Algunos streams son: " + stream);
    }
    AgregarCanal(canal) {
        this.canales.push(canal);
    }
    AgregarStream(stream) {
        this.envivo.push(stream);
    }
}
export function ImprimirLista() {
    let list = ListaS.map(list => list.nombre);
    console.log(list);
}
export function AgregarS(nombre, nickname, descripcion, ...canales) {
    const streamer6 = new Streamer(nombre = nombre, nickname = nickname, descripcion = descripcion, ...canales = canales);
    console.log("Streamer agregado con exito");
}
//# sourceMappingURL=Streamer.js.map